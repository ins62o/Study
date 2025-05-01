import { Image, Text, View } from "react-native";
import Margin from "./Margin";
import styled from "styled-components/native";

export default ({ uri, name, introduction, isMe }) => {
  const size = isMe ? 50 : 40;
  return (
    <RowContainer>
      <ProfileImage source={{ uri }} size={size} />
      <TextContainer style={{ justifyContent: "center", marginLeft: 10 }}>
        <NameText isMe={isMe}>{name}</NameText>
        {!!introduction && (
          <View>
            <Margin height={isMe ? 6 : 2} />
            <IntroText isMe={isMe}>{introduction}</IntroText>
          </View>
        )}
      </TextContainer>
    </RowContainer>
  );
};

const RowContainer = styled.View`
  flex-direction: row;
`;

const ProfileImage = styled.Image`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size * 0.4}px;
`;

const TextContainer = styled.View`
  justify-content: center;
  margin-left: 10px;
`;

const NameText = styled.Text`
  font-weight: ${(props) => (props.isMe ? "bold" : "normal")};
  font-size: ${(props) => (props.isMe ? 16 : 15)}px;
`;

const IntroText = styled.Text`
  font-size: ${(props) => (props.isMe ? 12 : 11)}px;
  color: grey;
`;
