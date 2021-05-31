export const defaultError =
  "При запросе на сервер произошла ошибка, или сервер вернул некорректные данные";

export const products_blank = [
  {
    name: 'ООО "Ромашка"',
    type: "client_name",
  },
  {
    name: "hello@romashka.com",
    type: "client_email",
  },
  {
    type: "tabs",
    name: "blank",
    default: "tab1",
    tab1: {
      name: "Мои кейсы",
      icon: "cases.png",
      code: "blank_tab1",
      visible: true,
    },
    tab2: {
      name: "Дистрибутивы",
      icon: "distr.png",
      code: "blank_tab2",
      visible: true,
    },
    tab3: {
      name: "",
      icon: "",
      code: "",
      visible: false,
    },
  },
];
