import style from "./MainInfo.module.css";
import SocialLink from "./SocialLink";

const mock = [
  { link: "https://t.me/makeyzn", name: "Telegram" },
  { link: "https://github.com/makeyzn", name: "GitHub" },
  { link: "#", name: "Resume" },
];

const MainInfo = () => {
  return (
    <div className={style.main}>
      <div className={style.main__logo}>ВК</div>
      <div className={style.main__contacts}>
        <h3>Владимир Конаков</h3>
        <ul className={style.main__contacts_links}>
          {mock.map((social) => (
            <SocialLink {...social} key={social.name} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainInfo;
