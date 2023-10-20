import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
function Screen2(props) {
  const { count } = props;

  const dataLab4b = [
    {
      img: require("../assets/img2/giacchuyen 1.png"),
    },
    {
      img: require("../assets/img2/daynguon 1.png"),
    },
    {
      img: require("../assets/img2/dauchuyendoipsps2 1.png"),
    },
    {
      img: require("../assets/img2/dauchuyendoi 1.png"),
    },
    {
      img: require("../assets/img2/carbusbtops2 1.png"),
    },

    {
      img: require("../assets/img2/daucam 1.png"),
    },
  ];
  const Item = ({title}) => (
    <View style={styles.content1}>
      <Image
        style={styles.imgC1}
        source={title.img}
      ></Image>
      <Text style={styles.textC1}>Cáp chuyển từ Cổng{"\n"}USB sang PS2...</Text>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{
            width: "84.07px",
            height: "13px",
            resizeMode: "contain",
            top: "15px",
            left: "20px",
          }}
          source={require("../assets/img2/Group 3.png")}
        ></Image>
        <Text style={styles.text1C1}>(15)</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.text2C1}>69.900 đ</Text>
        <Text style={styles.text3C1}>-39%</Text>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.btn1H}>
          <Image
            style={styles.imgH}
            source={require("../assets/img2/ant-design_arrow-left-outlined.png")}
          ></Image>
        </TouchableOpacity>
        <View style={styles.textInH}>
          <TextInput
            style={{
              width: "152px",
              height: "30px",
              position: "absolute",
              left: "40px",
            }}
            placeholder="   Dây cáp usb"
          ></TextInput>
          <Image
            style={styles.imgInputH}
            source={require("../assets/img2/whh_magnifier.png")}
          ></Image>
        </View>

        <TouchableOpacity style={styles.btn2H}>
          <Image
            style={styles.imgH}
            source={require("../assets/img2/bi_cart-check.png")}
          ></Image>
          <Image
            style={styles.circleH}
            source={require("../assets/img2/Ellipse 4.png")}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn3H}>
          <Image
            style={styles.imgH}
            source={require("../assets/img2/Group 2.png")}
          ></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
            <FlatList
              data = {dataLab4b}
              numColumns={2}
              renderItem={({item }) => <Item title={item}/>}
              scrollEnabled={true}
            />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.btn1F}>
          <Image
            style={styles.imgF}
            source={require("../assets/img2/Group10.png")}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn2F}>
          <Image
            style={styles.imgF}
            source={require("../assets/img2/Vector(Stroke).png")}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn3F}>
          <Image
            style={styles.imgF}
            source={require("../assets/img2/Vector1(Stroke).png")}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "640px",
    
  },

  header: {
    height: "42px",
    backgroundColor: "rgba(27, 169, 255, 1)",
    flexDirection: "row",
    width:'375px'
  },

  btn1H: {
    width: "40px",
    height: "42px",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  imgH: {
    height: "24px",
    width: "24px",
    resizeMode: "contain",
  },

  textInH: {
    width: "192px",
    height: "30px",
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignSelf: "center",
    justifyContent: "center",
  },

  imgInputH: {
    height: "24px",
    width: "24px",
    left: "10px",
  },

  btn2H: {
    height: "42px",
    width: "40px",
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
  },

  circleH: {
    height: "17px",
    width: "17px",
    position: "absolute",
    left: "50px",
    bottom: "20px",
  },

  btn3H: {
    height: "42px",
    width: "40px",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  content: {
    flex: 8,
    backgroundColor: "#E5E5E5",
    flexDirection: "row",
    width:'375px'
  },

  content1: {
    width: "155px",
    height: "180px",
    top: "20px",
    left: "10px",
    flex: 1,
  },

  imgC1: {
    height: "90px",
    width: "155px",
    resizeMode: "contain",
  },

  textC1: {
    fontSize: "12px",
    fontFamily: "roboto",
    fontWeight: "400",
    top: "10px",
    left: "20px",
  },

  text1C1: {
    fontSize: "10px",
    fontFamily: "roboto",
    fontWeight: "400",
    top: "15px",
    left: "25px",
  },

  text2C1: {
    fontSize: "12px",
    fontFamily: "roboto",
    fontWeight: "700",
    top: "15px",
    left: "25px",
  },

  text3C1: {
    fontSize: "12px",
    fontFamily: "roboto",
    fontWeight: "400",
    top: "15px",
    left: "45px",
    color: "rgba(150, 157, 170, 1)",
  },

  footer: {
    height: "49px",
    backgroundColor: "rgba(27, 169, 255, 1)",
    flexDirection: "row",
    width:'375px'
  },

  btn1F: {
    width: "80px",
    height: "49px",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  imgF: {
    height: "24px",
    width: "24px",
    resizeMode: "contain",
  },

  btn2F: {
    width: "80px",
    height: "49px",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  btn3F: {
    width: "80px",
    height: "49px",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
export default Screen2;
