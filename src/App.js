import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

import Button from "@mui/material/Button";
import {
  FormControlLabel,
  FormLabel,
  Slider,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { flexbox } from "@mui/system";

function App() {
  const cardObj = {
    cardNo: "1234 5865 7425 1125",
    userName: "Richie Richard Rich",
    bankName: "IBIBI",
    validFrom: "12/20",
    validThru: "12/25",
    cardProvider: "VISA",
    cardColor: "",
    is3d: false,
    opacity: 50,
    blur: 4,
  };

  const [cardInfo, setCardInfo] = useState(cardObj);

  const handleSetState = (e) => {
    let value = e.target.name === "is3d" ? e.target.checked : e.target.value;
    console.log("value", value);

    if (e.target.name === "blur") {
      value = parseInt((value * 25) / 100);
    }

    setCardInfo({ ...cardInfo, [e.target.name]: value });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="card-container">
          <div
            className="card"
            style={{
              transform: cardInfo.is3d
                ? "perspective(16cm) rotateX(-15deg) rotateY(30deg)"
                : "none",
              backgroundColor: `rgba(2, 28, 34, ${cardInfo.opacity / 100})`,
              backdropFilter: `blur(${cardInfo.blur}px) saturate(180%)`,
            }}
          >
            <div className="first-row">
              <div className="bank-logo">{cardInfo.bankName} Bank</div>
              <div className="card-category">GOLD</div>
            </div>

            <div className="second-row">
              <div className="card-type">International Debit Card</div>
            </div>

            <div className="third-row">
              <SmartChip></SmartChip>
            </div>

            <div className="fourth-row">
              <div className="card-no">{cardInfo.cardNo}</div>
            </div>

            <div className="fifth-row">
              <div className="left">
                <div className="valid">
                  <div className="from">VALID FROM</div>
                  <div className="year">{cardInfo.validFrom}</div>
                  <div className="thru">VALID THRU</div>
                  <div className="year">{cardInfo.validThru}</div>
                </div>
                <div className="name">{cardInfo.userName.toUpperCase()}</div>
              </div>
              <div className="right">
                <div className="card-brand">
                  {cardInfo.cardProvider.toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-config-container">
          <div className="flex-box">
            <div>
              <TextField
                id="outlined-basic"
                label="Bank Name"
                variant="outlined"
                name="bankName"
                onChange={handleSetState}
                value={cardInfo.bankName}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="User Name"
                variant="outlined"
                name="userName"
                onChange={handleSetState}
                value={cardInfo.userName}
              />
            </div>

            <div>
              <TextField
                id="outlined-basic"
                label="Card #"
                variant="outlined"
                name="cardNo"
                onChange={handleSetState}
                value={cardInfo.cardNo}
              />
            </div>

            <div>
              <TextField
                id="outlined-basic"
                label="Card Provider"
                variant="outlined"
                name="cardProvider"
                onChange={handleSetState}
                value={cardInfo.cardProvider}
              />
            </div>

            <div>
              <TextField
                id="outlined-basic"
                label="Valid From"
                variant="outlined"
                name="validFrom"
                onChange={handleSetState}
                value={cardInfo.validFrom}
              />
            </div>

            <div>
              <TextField
                id="outlined-basic"
                label="Valid Thru"
                variant="outlined"
                name="validThru"
                onChange={handleSetState}
                value={cardInfo.validThru}
              />
            </div>

            <div>
              <FormControlLabel
                style={{ color: "#000" }}
                label="3D View enabled?"
                control={
                  <Switch
                    name="is3d"
                    checked={cardInfo.is3d}
                    onChange={handleSetState}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
              />
            </div>

            <div style={{ width: "200px", color: "#000", padding: "20px" }}>
              <Typography id="input-slider" gutterBottom>
                Opacity
              </Typography>
              <Slider
                aria-label="Default"
                valueLabelDisplay="auto"
                name="opacity"
                onChange={handleSetState}
                value={cardInfo.opacity}
              />
            </div>

            <div style={{ width: "200px", color: "#000", padding: "20px" }}>
              <Typography id="input-slider" gutterBottom>
                Blur
              </Typography>
              <Slider
                aria-label="Default"
                valueLabelDisplay="auto"
                name="blur"
                onChange={handleSetState}
                value={cardInfo.blur * 4}
                min={0}
                max={100}
                step={1}
              />
            </div>

            <div style={{ width: "200px", color: "#000", padding: "20px" }}>
              <Typography id="input-slider" gutterBottom>
                Color
              </Typography>
              <input type="color" id="favcolor" name="favcolor" value="#ff0000" onChange></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SmartChip() {
  return (
    <div className="smart-chip">
      <table cellspacing="0">
        <tr>
          <td></td>
          <td className="middle cell12"></td>
          <td className="cell13"></td>
        </tr>
        <tr>
          <td></td>
          <td className="middle"></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td className="middle"></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
