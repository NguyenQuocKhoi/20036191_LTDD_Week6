import {
  StyleSheet,
  Text,
  View,
  Image,
    FlatList,
  TouchableOpacity,
} from "react-native";

function Screen1() {
  var dataLab04 = [
    {
      productName: "Cá nấu lẩu, nấu mì mini...",
      img: require("../assets/img/ca_nau_lau.png"),
      shopName: "Shop Devang",
    },
    {
      productName: "1KG KHÔ GÀ BƠ TỎI...",
      img: require("../assets/img/ga_bo_toi.png"),
      shopName: "LTD Food",
    },
    {
      productName: "Xe cần cẩu đa năng",
      img: require("../assets/img/xa_can_cau.png"),
      shopName: "Thế giới đồ chơi",
    },
    {
      productName: "Đồ chơi dạng mô hình",
      img: require("../assets/img/do_choi_dang_mo_hinh.png"),
      shopName: "Thế giới đồ chơi",
    },
    {
      productName: "Lãnh dạo giản đơn",
      img: require("../assets/img/lanh_dao_gian_don.png"),
      shopName: "Minh Long Book",
    },
    {
      productName: "Hiểu lòng còn trẻ",
      img: require("../assets/img/hieu_long_con_tre.png"),
      shopName: "Minh Long Book",
    },
    {
      productName: "Donald Trump Thiên tài lãnh đạo",
      img: require("../assets/img/trump.png"),
      shopName: "Minh Long Book",
    },
    {
      productName: "Cá nấu lẩu, nấu mì mini...",
      img: require("../assets/img/ca_nau_lau.png"),
      shopName: "Devang",
    },
    {
      productName: "1KG KHÔ GÀ BƠ TỎI...",
      img: require("../assets/img/ga_bo_toi.png"),
      shopName: "LTD Food",
    },
    {
      productName: "Xe cần cẩu đa năng",
      img: require("../assets/img/xa_can_cau.png"),
      shopName: "Thế giới đồ chơi",
    },
    {
      productName: "Đồ chơi dạng mô hình",
      img: require("../assets/img/do_choi_dang_mo_hinh.png"),
      shopName: "Thế giới đồ chơi",
    },
    {
      productName: "Lãnh dạo giản đơn",
      img: require("../assets/img/lanh_dao_gian_don.png"),
      shopName: "Minh Long Book",
    },
    {
      productName: "Hiểu lòng còn trẻ",
      img: require("../assets/img/hieu_long_con_tre.png"),
      shopName: "Minh Long Book",
    },
    {
      productName: "Donald Trump Thiên tài lãnh đạo",
      img: require("../assets/img/trump.png"),
      shopName: "Minh Long Book",
    },
  ];
  const Item = ({ title }) => (
    <View style={styles.content2}>
      <Image style={styles.imgC2} source={title.img}></Image>
      <View style={{left:'5px', flex:1}}>
        <Text style={{ fontSize: "15px", fontWeight:'500', bottom:"1px" }}>{title.productName}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "gray" }}>Shop </Text>
          <Text style={{ fontSize: "15px", color: "rgba(232, 48, 48, 1)" }}>
            {title.shopName}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btnC2}>
        <Text style={styles.btnTextC2}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.btnh1}>
          <Image
            style={styles.imgh}
            source={require("../assets/img/ant-design_arrow-left-outlined.png")}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.texth}>Chat</Text>
        <TouchableOpacity style={styles.btnh2}>
          <Image
            style={styles.imgh}
            source={require("../assets/img/bi_cart-check.png")}
          ></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.content1}>
          <Text style={styles.textC1}>
            Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại {"\n"}chát với shop!
          </Text>
        </View>

        <FlatList
          data={dataLab04}
          renderItem={({ item }) => <Item title={item} />}
          scrollEnabled={true}
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.fbtn1}>
          <Image
            style={styles.imgf1}
            source={require("../assets/img/Group10.png")}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.fbtn2}>
          <Image
            style={styles.imgf2}
            source={require("../assets/img/Vector(Stroke).png")}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.fbtn1}>
          <Image
            style={styles.imgf3}
            source={require("../assets/img/Vector1(Stroke).png")}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "653px",
  },

  header: {
    height: "42px",
    backgroundColor: "rgba(27, 169, 255, 1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  imgh: {
    height: "24px",
    width: "24px",
    resizeMode: "contain",
  },
  texth: {
    textAlign: "center",
    color: "white",
    fontSize: "20px",
    flex: 3,
  },

  btnh1: {
    height: "42px",
    width: "85px",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  btnh2: {
    height: "42px",
    width: "85px",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  content: {
    flex: 1,
  },

  content1: {
    height: "65px",
    backgroundColor: "#e5e5e5",
    justifyContent: "center",
    borderBottomWidth: "2px",

    borderColor: "rgba(196, 196, 196, 1)",
  },

  textC1: {
    fontSize: "16px",
    left: "20px",
  },

  content2: {
    height: "95px",
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth:'2px',
    borderColor: "rgba(196, 196, 196, 1)",
    alignItems:'center'

  },
  imgC2: {
    height: "74px",
    width: "74px",
  },

  btnC2: {
    width: '98px',
    height: '45px',
    backgroundColor: "#F31111",
    justifyContent: "center",
    right: '20px',
  },
  btnTextC2: {
    textAlign: "center",
    color: "white",
    fontSize: '20px',
  },

  footer: {
    height: "49px",
    backgroundColor: "rgba(27, 169, 255, 1)",
    alignItems: "center",
    flexDirection: "row",
  },

  fbtn1: {
    width: "85px",
    height: "49px",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  imgf1: {
    width: "23px",
    height: "13.85px",
    resizeMode: "contain",
  },

  imgf2: {
    width: "24px",
    height: "24px",
    resizeMode: "contain",
  },

  fbtn2: {
    width: "85px",
    height: "49px",
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
  },

  imgf3: {
    width: "26.29px",
    height: "24.93px",
    resizeMode: "contain",
  },

  fbtn3: {
    width: "85px",
    height: "49px",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
export default Screen1;
