const express = require('express');
const path = require("path");
const cors = require("cors");
const routes = require('.//Router/routes');
const session = require('express-session');
const MemoryStore = require('memorystore')(session);

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4000;

app.use('/', routes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
      origin: true, // 출처 허용 옵션
      credentials: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
    })
  );

app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    store: new MemoryStore({
      checkPeriod:  (1000 * 60 * 3), // only change last number(minute)
    }),
    cookie: { maxAge: 180000 },
  })
);

app.listen(PORT, () => {
    console.log(`Check out the app at http://localhost:${PORT}`);
});

