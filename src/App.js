import "materialize-css";
import {
  Slider,
  Slide,
  Caption,
  SideNav,
  Button,
  SideNavItem,
  Icon,
  Row,
  Col,
  Card,
  CardTitle
} from "react-materialize";

function App() {
  return (
    <div className="App" style={{ margin: "0px 10px 0 10px" }}>
      <div>
        <style>
          {`
            #root > div > div {
              z-index: 99999 !important;
            }
        `}
        </style>
        <SideNav
          id="SideNav-68"
          options={{
            draggable: true,
          }}
          trigger={<Button node="button"><Icon>menu</Icon></Button>}
        >
          <SideNavItem
            className='circle'
            user={{
              background: "https://materializecss.com/images/office.jpg",
              email: "test@gmail.com",
              image: "https://materializecss.com/images/yuna.jpg",
              name: "Satria Darmawan",
            }}
            userView
          />

          <SideNavItem href="#!icon" icon={<Icon>person_outline</Icon>}>
            Profil Saya
          </SideNavItem>
          <SideNavItem href="#!icon" icon={<Icon>help</Icon>}>
            Hubungi Kami
          </SideNavItem>
          <SideNavItem divider />
          <SideNavItem subheader>Product</SideNavItem>
          <SideNavItem>Kesehatan</SideNavItem>
          <SideNavItem>Komputer & Aksesoris</SideNavItem>
          <SideNavItem>Gaming</SideNavItem>
          <SideNavItem>Kamera</SideNavItem>
          <SideNavItem>Olahraga</SideNavItem>
          <SideNavItem>Fashion Pria</SideNavItem>
          <SideNavItem>Fashion Wanita</SideNavItem>
        </SideNav>
      </div>
      <div>
      <Slider
        fullscreen={false}
        options={{
          duration: 500,
          height: 400,
          indicators: true,
          interval: 6000,
        }}
      >
        <Slide
          image={
            <img
              alt="pantai"
              src="https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg"
            />
          }
        >
          <Caption placement="center">
            <h3>Pantai</h3>
            <h5>
              Menangkan Tiket Liburan Ke Semua Pantai Di Indonesia, Dengan
              Membeli Product Disini
            </h5>
          </Caption>
        </Slide>

        <Slide
          image={
            <img
              alt="hongkong"
              src="https://wallpaperaccess.com/full/1137389.jpg"
            />
          }
        >
          <Caption placement="left">
            <h3>Hongkong</h3>
            <h5>
              Dapatkan Kesempatan Jalan - Jalan Ke Hongkong Dengan Membeli
              Sebuah Product
            </h5>
          </Caption>
        </Slide>

        <Slide
          image={
            <img
              alt="paris"
              src="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72"
            />
          }
        >
          <Caption>
            <h3>Paris</h3>
            <h5>
              Mau Jalan - Jalan Ke Paris ? Yuk Borong Product Disini, Semakin
              Banyak Product Yang Kalian Beli, Semakin Besar Juga Kesempatan
              Menangnya
            </h5>
          </Caption>
        </Slide>
      </Slider>
      <br />
      <Row>
        <Col m={3}>
          <Card 
            className="card small"
            header={<CardTitle image='https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg'>Audio</CardTitle>}
          >
            <p style={{fontSize: '13px'}}>Audio Technica - Mulai Dari <mark style={{backgroundColor:'red', color:'black'}}>Rp 910 rb</mark></p>
          </Card>
        </Col>

        <Col m={3}>
          <Card
          className="card small"
          header={<CardTitle image='https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg'>Handphone</CardTitle>}>
            <p style={{fontSize: '13px'}}>Handphone Samsung - Mulai Dari <mark style={{backgroundColor:'red', color:'black'}}>Rp 200 rb</mark></p>
          </Card>
        </Col>

        <Col m={3}>
          <Card
            className="card small"
            header={<CardTitle image='https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg'>Sequishy</CardTitle>}
          >
            <p style={{fontSize: '13px'}}>Sequishy - Mulai Dari <mark style={{backgroundColor:'red', color: 'black'}}>Rp 5,5 rb</mark></p>
          </Card>
        </Col>

        <Col m={3}>
          <Card
            className="card small"
            header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg">Koleksi The Avenger</CardTitle>}
          >
            <p style={{fontSize:'13px'}}>Koleksi The Avenger - Mulai Dari <mark style={{backgroundColor:'red', color: 'black'}}>Rp 10 rb</mark></p>
          </Card>
        </Col>
      </Row>
      </div>
    </div>
  );
}

export default App;
