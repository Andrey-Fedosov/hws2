import React from "react";
import Message, { MessagePropsType } from "./message/Message";
import MessageSender from "./message-sender/MessageSender";
import s2 from "../../s1-main/App.module.css";
import FriendMessage from "./friend-message/FriendMessage";
import avatar from "./avatar.png";

/*
 * 1 - описать тип MessageType
 * 2 - описать тип MessagePropsType в файле Message.tsx
 * 3 - в файле Message.tsx отобразить приходящие данные
 * 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
 * 5 - сделать стили в соответствии с дизайном
 * */

type UserPropsType = {
  avatar: string;
  name: string;
};
type MessageDataPropsType = {
  text: string;
  time: string;
};

// нужно создать правильный тип вместо any
export type MessageType = {
  id: number;
  user: UserPropsType;
  message: MessageDataPropsType;
};

// структуру объекта не менять
export const message0: MessageType = {
  id: 0,
  user: {
    avatar: avatar, // можно менять
    name: "Bradley", // можно менять
  },
  message: {
    text: "This is my mesage to you-uuuu", // можно менять
    time: "22:00", // можно менять
  },
};
export const friendMessage0: MessageType = {
  id: 100,
  user: {
    avatar: avatar, // можно менять
    name: "Pete", // можно менять
  },
  message: {
    text: "this message should be on the opposite side of the page", // можно менять
    time: "22:00", // можно менять
  },
};

const HW1 = () => {
  return (
    <div id={"hw1"}>
      <div className={s2.hwTitle}>Homework #1</div>
      <div className={s2.hw}>
        {/*проверка отображения (не менять)*/}
        <div className={s2.messageContainer}>
          <Message message={message0} />
          <FriendMessage message={friendMessage0} />
        </div>

        {/*для автоматической проверки дз (не менять)*/}
        <MessageSender M={Message} />
      </div>
    </div>
  );
};

export default HW1;
