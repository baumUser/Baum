import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";

export const Main = () => {
  const [widthW, setwidthW] = useState(0);
  const [dolar, setDolar] = useState(1);
  const [fur, setFur] = useState(0);
  const [hW, setHW] = useState(1);
  const [blindC, setBlindC] = useState("1");
  const [roter, setRoter] = useState("1");

  const [res, setRes] = useState(0);

  const handleChange = (event) => {
    setHW(event.target.value);
  };

  const result = () => {
    if (widthW <= 400) {
      return { p1: 12.45, p2: 11.55, r: 12.2 };
    } else if (widthW > 400 && widthW <= 500) {
      return { p1: 13.57, p2: 12.45, r: 12.2 };
    } else if (widthW > 500 && widthW <= 600) {
      return { p1: 14.68, p2: 13.38, r: 12.2 };
    } else if (widthW > 600 && widthW <= 700) {
      return { p1: 16.04, p2: 14.56, r: 13.2 };
    } else if (widthW > 700 && widthW <= 800) {
      return { p1: 17.43, p2: 15.75, r: 13.2 };
    } else if (widthW > 800 && widthW <= 900) {
      return { p1: 18.9, p2: 16.94, r: 14.4 };
    } else if (widthW > 900 && widthW <= 1000) {
      return { p1: 20.32, p2: 18.27, r: 14.4 };
    } else if (widthW > 1000 && widthW <= 1100) {
      return { p1: 22.23, p2: 19.99, r: 15.4 };
    } else if (widthW > 1100 && widthW <= 1200) {
      return { p1: 23.58, p2: 21.19, r: 18.8 };
    } else if (widthW > 1200 && widthW <= 1300) {
      return { p1: 24.97, p2: 22.38, r: 18.8 };
    } else if (widthW > 1300 && widthW <= 1400) {
      return { p1: 26.36, p2: 23.56, r: 19.8 };
    } else if (widthW > 1400 && widthW <= 1500) {
      return { p1: 27.72, p2: 24.76, r: 19.8 };
    } else if (widthW > 1500 && widthW <= 1600) {
      return { p1: 29.63, p2: 26.46, r: 21 };
    } else if (widthW > 1600 && widthW <= 1700) {
      return { p1: 31, p2: 27.66, r: 21 };
    } else if (widthW > 1700 && widthW <= 1800) {
      return { p1: 32.36, p2: 28.83, r: 22.1 };
    } else if (widthW > 1800 && widthW <= 1900) {
      return { p1: 33.74, p2: 30.03, r: 23.1 };
    } else if (widthW > 1900 && widthW <= 2000) {
      return { p1: 35.26, p2: 31.37, r: 24.3 };
    } else if (widthW > 2000 && widthW <= 2100) {
      return { p1: 37.18, p2: 33.09, r: 24.3 };
    } else if (widthW > 2100 && widthW <= 2200) {
      return { p1: 38.55, p2: 34.28, r: 26.5 };
    } else if (widthW > 2200 && widthW <= 2300) {
      return { p1: 40.01, p2: 35.47, r: 27.6 };
    } else if (widthW > 2300 && widthW <= 2400) {
      return { p1: 41.31, p2: 36.67, r: 30.87 };
    } else if (widthW > 2400 && widthW <= 2500) {
      return { p1: 43.16, p2: 38.18, r: 33.1 };
    } else if (widthW > 2500 && widthW <= 2600) {
      return { p1: 44.8, p2: 39.72, r: 35.3 };
    } else if (widthW > 2600 && widthW <= 2700) {
      return { p1: 46.45, p2: 41.27, r: 37.5 };
    } else if (widthW > 2800 && widthW <= 2900) {
      return { p1: 49.92, p2: 44.3, r: 43.1 };
    } else if (widthW > 2900 && widthW <= 3000) {
      return { p1: 51.63, p2: 45.84, r: 45.2 };
    } else if (widthW > 3000 && widthW <= 3100) {
      return { p1: 53.36, p2: 46.25, r: 47.3 };
    } else if (widthW > 3100 && widthW <= 3200) {
      return { p1: 55.19, p2: 48.88, r: 49.6 };
    } else if (widthW > 3200 && widthW <= 3300) {
      return { p1: 56.81, p2: 50.4, r: 52.5 };
    } else if (widthW > 3300 && widthW <= 3400) {
      return { p1: 58.52, p2: 51.93, r: 55.1 };
    } else if (widthW > 3400) {
      return { p1: 60.24, p2: 53.36, r: 57.3 };
    }
  };
  const getData = () => {
    const { p1, p2, r } = result();
    if (hW === 1) {
      if (blindC === "1" && roter === "1") {
        return p1;
      } else if (blindC === "1" && roter === "2") {
        return p1 + r;
      } else if (blindC === "2" && roter === "1") {
        return p2;
      } else if (blindC === "2" && roter === "2") {
        return p2 + r;
      } else if (blindC === "3" && roter === "1") {
        return p1 + p2;
      } else if (blindC === "3" && roter === "2") {
        return p1 + p2 + r + r;
      }
    } else if (hW === 2) {
      const p140 = (p1 / 100) * 40 + p1;
      const p240 = (p2 / 100) * 40 + p2;
      if (blindC === "1" && roter === "1") {
        return p140;
      } else if (blindC === "1" && roter === "2") {
        return p140 + r;
      } else if (blindC === "2" && roter === "1") {
        return p240;
      } else if (blindC === "2" && roter === "2") {
        return p240 + r;
      } else if (blindC === "3" && roter === "1") {
        return p140 + p240;
      } else if (blindC === "3" && roter === "2") {
        return p140 + p240 + r + r;
      }
    } else if (hW === 3) {
      const p180 = (p1 / 100) * 80 + p1;
      const p280 = (p2 / 100) * 80 + p2;
      if (blindC === "1" && roter === "1") {
        return p180;
      } else if (blindC === "1" && roter === "2") {
        return p180 + r;
      } else if (blindC === "2" && roter === "1") {
        return p280;
      } else if (blindC === "2" && roter === "2") {
        return p280 + r;
      } else if (blindC === "3" && roter === "1") {
        return p180 + p280;
      } else if (blindC === "3" && roter === "2") {
        return p180 + p280 + r + r;
      }
    }
  };
  const getDataRes = () => {
    console.log(fur);
    setRes(() => getData() + +fur);
  };
  useEffect(() => {
    if (widthW >= 3000) {
      setRoter("2");
    }
  }, [widthW]);
  useEffect(() => {
    const storD = localStorage.getItem("dolar");
    if (!storD) {
      localStorage.setItem("dolar", "1");
    } else {
      setDolar(+storD);
    }
  }, []);
  return (
    <div
      style={{
        // background: "rgb(149,144,222)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "rgb(149,144,222)",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontWeight: 800,
            color: "white",
            size: "2em",
          }}
        >
          BAUM.UA
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5%",
        }}
      >
        <TextField
          id="outlined-number"
          label="Ширина (см)"
          type="number"
          style={{ width: "45%" }}
          value={widthW}
          onChange={(e) => {
            setwidthW(e.target.value);
          }}
        />
        <TextField
          id="outlined-number"
          label="фурнитура ($)"
          type="number"
          style={{ width: "45%" }}
          value={fur}
          onChange={(e) => {
            setFur(e.target.value);
          }}
        />
      </div>
      <FormControl style={{ width: 200 }}>
        <InputLabel id="demo-simple-select-label">Высота</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={hW}
          label="высота"
          onChange={handleChange}
        >
          <MenuItem value={1}>до 1700 см. </MenuItem>
          <MenuItem value={2}>1701 - 2500 см.</MenuItem>
          <MenuItem value={3}>2501- 3500 см.</MenuItem>
        </Select>
      </FormControl>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5%",
        }}
      >
        <FormControl component="fieldset">
          <FormLabel component="legend">Механизм</FormLabel>
          <RadioGroup
            aria-label="complate"
            name="radio-buttons-group"
            value={roter}
            onChange={(event, value) => {
              event.persist();
              setRoter(value);
            }}
          >
            <FormControlLabel
              value="1"
              control={<Radio />}
              label="веревочный"
            />
            <FormControlLabel value="2" control={<Radio />} label="роторный" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">Набор</FormLabel>
          <RadioGroup
            aria-label="complate"
            name="radio-buttons-group"
            value={blindC}
            onChange={(event, value) => {
              event.persist();
              setBlindC(value);
            }}
          >
            <FormControlLabel value="1" control={<Radio />} label="Штора" />
            <FormControlLabel value="2" control={<Radio />} label="Тюль" />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label="Штора + Тюль"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5%",
        }}
      >
        <TextField
          id="outlined-number"
          label="курс долара"
          type="number"
          style={{ width: "45%" }}
          value={dolar}
          onChange={(e) => {
            localStorage.setItem("dolar", `${e.target.value}`);
            setDolar(e.target.value);
          }}
        />
        <Button variant="contained" size="large" onClick={getDataRes}>
          Просчитать
        </Button>
      </div>
      <div
        style={{
          width: "250px",
          display: "flex",
          fontSize: "1.2em",
          justifyContent: "space-between",
        }}
      >
        <p>Прайс: </p> <p>{res.toFixed(2)}$</p>
      </div>
      <div
        style={{
          width: "250px",
          display: "flex",
          fontSize: "1.2em",
          justifyContent: "space-between",
        }}
      >
        <p>Прайс + 55%: </p> <p>{((res / 100) * 55 + res).toFixed(2)}$</p>
      </div>
      <div
        style={{
          width: "250px",
          display: "flex",
          fontSize: "1.2em",
          justifyContent: "space-between",
        }}
      >
        <p>Маржа: </p> <p>{((res / 100) * 55).toFixed(2)}$</p>
      </div>
      <div
        style={{
          width: "250px",
          display: "flex",
          fontSize: "1.2em",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>
          Цена для <br />
          клиента:{" "}
        </p>{" "}
        <p>{(((res / 100) * 55 + res) * dolar).toFixed(2)}грн.</p>
      </div>
    </div>
  );
};
