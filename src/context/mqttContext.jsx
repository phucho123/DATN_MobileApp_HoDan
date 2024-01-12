import React, { useState, createContext, useEffect, useContext } from "react";
import Paho from "paho-mqtt";
import { ADAFRUIT_USER, ADAFRUIT_KEY, SERVER_URL } from "../../secrete";
import axios from "axios";
import AuthenticationAPI from "./authContext";

const MqttAPI = createContext();

const client = new Paho.Client("wss://io.adafruit.com:443/mqtt/", "");

client.connect({
  useSSL: true,
  userName: ADAFRUIT_USER,
  password: ADAFRUIT_KEY,
  onSuccess: () => {
    console.log("Connected to Adafruit");
    client.subscribe(`${ADAFRUIT_USER}/feeds/datn.water-sensor`);
  },
  onFailure: (message) => {
    console.log("Failed to connect to Adafruit: ", message.errorMessage);
  },
});

export const MqttContext = ({ children }) => {
  const [flowRateList, setFlowRateList] = useState([{ value: 0, time: "" }]);
  const [totalRateList, setTotalRateList] = useState([{ value: 0, time: "" }]);
  const { deviceID } = useContext(AuthenticationAPI);

  useEffect(() => {
    client.onMessageArrived = async (message) => {
      console.log("Message arrived on topic:", message.destinationName, message.payloadString);
      const data = JSON.parse(message.payloadString.replace(/\s/g, "").replace(/'/g, '"'));

      const newFlowRate = data.flowRateValue;
      const newTotalRate = data.totalFlowValue;
      setFlowRateList((prevList) => [...prevList, { value: newFlowRate, time: Date.now() }]);
      setTotalRateList((prevList) => [...prevList, { value: newTotalRate, time: Date.now() }]);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      console.log("deviceID:", deviceID);
      if (deviceID) {
        const res = await axios.get(`${SERVER_URL}/water-meter/list-by-id?id=${deviceID}`);

        const flowRateData = res.data.map((item) => ({
          value: item.flowRateValue,
          time: item.updatedAt.slice(5, 10),
        }));
        const totalRateData = res.data.map((item) => ({
          value: item.totalFlowValue,
          time: item.updatedAt.slice(5, 10),
        }));

        setFlowRateList(flowRateData);
        setTotalRateList(totalRateData);
      }
    };
    fetchData();
  }, [deviceID]);

  return (
    <MqttAPI.Provider value={{ flowRateList, setFlowRateList, totalRateList, setTotalRateList }}>
      {children}
    </MqttAPI.Provider>
  );
};

export default MqttAPI;
