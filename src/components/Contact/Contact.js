import React, { useState } from "react";
import { ContactWrapper, Email } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";

import ScrollAnimation from "react-animate-on-scroll";

function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showMobileTooltip, setShowMobileTooltip] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText("moazshaker121@gmail.com");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  const copyMobileToClipboard = () => {
    navigator.clipboard.writeText("+201550704321");
    setShowMobileTooltip(true);
    setTimeout(() => {
      setShowMobileTooltip(false);
    }, 700);
  };

  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <ScrollAnimation animateIn="fadeIn">
          <div className="BigCard">
            <Email>
              <div
                style={{
                  display: "flex",
                      alignItems: "center",
                      columnGap: "20px",
                      rowGap: "10px",
                      flexWrap: "wrap",
                      justifyContent: "center",
                }}
              >
                <span>moazshaker121@gmail.com</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={showTooltip}
                  onClose={() => setShowTooltip(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton onClick={copyToClipboard}>
                    <MdContentCopy
                      size={25}
                      style={{ cursor: "pointer", color: "#151418" }}
                    />
                  </IconButton>
                </Tooltip>
              </div>
              <a
                className="btn PrimaryBtn btn-shadow"
                href="mailto:moazshaker121@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a>
            </Email>
          </div>
          <div className="Container" style={{ marginTop: "1rem" }}>
            <div className="BigCard">
                <Email>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "2rem",
                      rowGap: "1rem",
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    <span>+201550704321</span>
                    <Tooltip
                      PopperProps={{
                        disablePortal: true,
                      }}
                      open={showMobileTooltip}
                      onClose={() => setShowMobileTooltip(false)}
                      title="Copied!"
                      TransitionComponent={Zoom}
                      disableFocusListener
                      disableHoverListener
                      disableTouchListener
                      placement="bottom"
                    >
                      <IconButton onClick={copyMobileToClipboard}>
                        <MdContentCopy
                          size={25}
                          style={{ cursor: "pointer", color: "#151418" }}
                        />
                      </IconButton>
                    </Tooltip>
                    <a
                      className="btn PrimaryBtn btn-shadow"
                      href="tel:+01550704321"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Call Me
                    </a>
                  </div>
                </Email>
              </div>
          </div>
        </ScrollAnimation>
      </div>
    </ContactWrapper>
  );
}
export default Contact;
