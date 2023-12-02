import Home from './home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Question from './question/Question';
import Setting from './setting/Setting';
import Notification from './notification/Notification';
import TabBar from '../components/TabBar';

const Tab = createBottomTabNavigator();

export const MyStack = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: TabBar,
            tabBarStyle: {
                height: 64,
                paddingBottom: 8,
            },
            tabBarActiveTintColor: "#384EC7",
            tabBarInactiveTintColor: "gray",
            headerStyle: {
                height: 80,
            },
            headerTitleStyle: { fontSize: 22, fontWeight: "600" },
        })}>
            <Tab.Screen name="Trang chủ" component={Home} />
            <Tab.Screen name="Thông báo" component={Notification} />
            <Tab.Screen name="Hỏi đáp" component={Question} />
            <Tab.Screen name="Cài đặt" component={Setting} />
        </Tab.Navigator>
    );
}