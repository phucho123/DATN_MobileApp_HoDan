import React from "react";
import { Text, View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const ChartComp = ({ title, data }) => {
  const labelsList = data.map((item) => item.time);
  let labels = labelsList.length > 5 ? labelsList.slice(-5) : labelsList;

  // let labels = ["16-1", "16-1", "16-1", "16-1", "16-1"]

  labels = labels.map((timestamp) => {
    const date = new Date(timestamp);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${day}-${month}`;
  });

  const valueList = data.map((item) => item.value);
  const dataArr = valueList.length > 5 ? valueList.slice(-5) : valueList;

  // const dataArr = [15, 30, 50, 90, 100]

  console.log(labels[0]);

  return (
    <View style={{ width: "100%" }}>
      <Text style={{ fontSize: 18, color: "orange", fontWeight: "bold", textAlign: "center", marginBottom: 4 }}>
        {title}
      </Text>
      <View
        style={{
          backgroundColor: "#BEFBC8",
          padding: 16,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: "#0F9D58",
          gap: 4,
        }}
      >
        <Text style={{ fontWeight: 600, fontSize: 16, color: "#0F9D58" }}>
          Lớn nhất: <Text>1500</Text>
        </Text>
        <Text style={{ fontWeight: 600, fontSize: 16, color: "#0F9D58" }}>
          Nhỏ nhất: <Text>500</Text>
        </Text>
        <Text style={{ fontWeight: 600, fontSize: 16, fontStyle: "italic", color: "#0F9D58" }}>
          Cập nhật mới nhất lúc: <Text>12/12/2023</Text>
        </Text>
      </View>
      <View>
        <LineChart
          data={{
            labels: labels,
            datasets: [
              {
                data: dataArr,
              },
            ],
          }}
          width={Dimensions.get("window").width - 20} // from react-native
          height={220}
          // yAxisLabel="m³"
          // yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#4285f4",
            backgroundGradientFrom: "#4285F4",
            backgroundGradientTo: "#C7DCFE",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 12,
            borderRadius: 12,
          }}
        />
      </View>
    </View>
  );
};

export default ChartComp;
