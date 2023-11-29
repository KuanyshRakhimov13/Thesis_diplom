import { Button, Card, Col, Row } from "antd";
import React from "react";
import "../style.css";
import { useNavigate } from "react-router";
import img1 from "../../img/muscle.png";
import img2 from "../../img/lose.png";
import img3 from "../../img/carb.png";
import img4 from "../../img/vegan.png";
import { useDispatch, useSelector } from "react-redux";
import { addUserId } from "../../../store/slices/authSlice";
import axios from "axios";
import { env } from "../../../configs/EnvironmentConfig";

const types = [
  {
    id: 1,
    img: img1,
    title: "Gain Muscle",
    text: "The Gain Muscle Plan is tailored to help you build lean muscle mass efficiently, making it perfect for anyone aiming to enhance strength and achieve a more muscular physique. Plan provides the optimal balance of nutrients needed for muscle growth, suitable for everyone.",
  },
  {
    id: 2,
    img: img2,
    title: "Lose Weight",
    text: "Our 'Lose Weight Plan' in our nutrition tracker app is your key to effective weight loss. Get optimal guidance, balanced meal options and to help you shed those extra pounds and reach your goals. Start your journey towards a healthier you today!",
  },
  {
    id: 3,
    img: img3,
    title: "Low Carb Diet",
    text: "The Low Carb Diet is a dietary plan that emphasizes reducing your daily intake of carbohydrates, such as bread, pasta, and sugary foods. This plan encourages your body to burn fat for energy, aiding in weight loss and stabilizing blood sugar levels.",
  },
  {
    id: 4,
    img: img4,
    title: "Vegan/Vegetarian Diet",
    text: "The Vegan/Vegetarian Diet is a plant-based eating plan that excludes animal products like meat, dairy, and eggs. It focuses on consuming fruits, vegetables, grains, legumes, and nuts for a balanced and cruelty-free diet. Live a life without feeling guilty",
  },
];

const CardsPage = () => {
  const userInfo = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // card_id is changed
  const chooseCard = async (id) => {
    dispatch(addUserId({ username: userInfo.currentUser, id: id }));
    try {
      await axios.post(`${env.API_BASE_URL}/auth/login/${id}`, {
        username: userInfo.currentUser,
      });
    } catch (error) {
      console.log(error);
    } finally {
      navigate(`/table/${id}`);
    }
  };

  // generates the cards
  const generateCards = () => {
    return types.map((item, index) => {
      return (
        <Card
          key={index}
          style={{
            border: "1px solid black",
            width: 300,
            margin: "30px 0px",
            height: 350,
          }}
          title={
            <Row
              align="middle"
              justify="space-between"
              style={{ margin: "10px 0px" }}
              key={index}
            >
              <Col>
                <h3>{item.title}</h3>
              </Col>{" "}
              <Col style={{ fontSize: 24 }}>
                <img
                  src={item.img ? item.img : null}
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                />
              </Col>
            </Row>
          }
        >
          <Row style={{ height: 170 }}>{item.text}</Row>
          <br />
          <Row>
            <Button
              onClick={() => chooseCard(item.id)}
              style={{ width: "100%" }}
            >
              ADD
            </Button>
          </Row>
        </Card>
      );
    });
  };

  return (
    <Col xs={24}>
      <Row justify="center">
        <Col xs={23}>
          <h1>Welcome to "Healthify" Nutrition Tracker!</h1>
          <div>
            Choose Your Path to Wellness. Are you ready to embark on a journey
            towards a healthier you? At Healthify, we're here to support you
            every step of the way. Our nutrition tracker application empowers
            you to take control of your diet and achieve your health and fitness
            goals. Begin by selecting one of our four specialized plans designed
            to cater to your unique needs:
            <b>Gain Weight Plan:</b> If you're looking to build muscle and
            increase your body mass, this plan is your go-to choice. We'll help
            you create a calorie surplus and guide you towards protein-rich
            foods to fuel your gains.
            <b>Lose Weight Plan:</b> For those on a mission to shed those extra
            pounds and achieve their ideal weight, our Lose Weight Plan is
            designed to provide you with the tools and guidance needed for
            effective weight management. Expect support for calorie control,
            portion sizing, and exercise.
            <b>Low Carb Diet:</b> Dive into a low-carb lifestyle with our Low
            Carb Diet plan. Whether you're managing blood sugar levels or simply
            looking to reduce carb intake, we'll assist you in making informed
            food choices while maintaining balance.
            <b>Vegan/Vegetarian Diet:</b> If you follow a plant-based diet, our
            Vegan/Vegetarian Diet plan has you covered. We offer tailored advice
            on nutrition, protein sources, and meal planning without the need
            for animal products.
            <b>Our App's Goals:</b>
            <ul>
              <li>
                <b>Personalized Nutrition:</b> We believe in the power of
                personalization. Our app tailors meal plans and recommendations
                to your specific goals and preferences, ensuring that your
                journey is uniquely yours.
              </li>

              <li>
                <b>Effortless Tracking:</b> Say goodbye to guesswork. Easily log
                your daily food intake, monitor calorie and nutrient
                consumption, and stay on track with your fitness goals.
              </li>

              <li>
                <b>Education and Insights:</b> Knowledge is key to making
                informed choices. Access a wealth of educational content about
                healthy eating and nutrition, arming yourself with the
                information you need to succeed.
              </li>

              <li>
                <b>Support for All Dietary Needs:</b> No matter your dietary
                preferences or restrictions, we've got you covered. Our app is
                flexible and accommodating, making it easy for you to stick to
                your chosen path.
              </li>

              <li>
                <b>Progress Tracking:</b> Stay motivated by tracking your
                progress over time. Set goals, monitor your achievements, and
                celebrate your successes.
              </li>

              <li>
                <b>Community and Support:</b> Join a like-minded community of
                individuals who are on their own health and wellness journeys.
                Connect, share, and inspire one another along the way.
              </li>
            </ul>
            Are you ready to take charge of your nutrition and well-being? Let's
            get started! Choose your plan and let "Healthify" Nutrition Tracker
            guide you towards a healthier, happier you.
          </div>
        </Col>
      </Row>

      <Row align="middle" justify="space-around" style={{ height: 450 }}>
        {generateCards()}
      </Row>
    </Col>
  );
};

export default CardsPage;
