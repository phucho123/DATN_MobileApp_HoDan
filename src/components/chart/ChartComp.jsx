import React from "react";
import { Text, View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const ChartComp = ({ title }) => {
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
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - 20} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#4285f4",
            backgroundGradientFrom: "#4285F4",
            backgroundGradientTo: "#C7DCFE",
            decimalPlaces: 2, // optional, defaults to 2dp
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
