import React, { Component } from 'react'
import './App.css'
import SplitText from 'react-pose-text'

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30
  }
}

class App extends Component {
  state = { online: true }

  componentDidMount() {
    setInterval(() => {
      this.setState({ online: window.navigator.onLine })
    }, 500)
  }

  render() {
    const { online } = this.state

    if (online) {
      document.body.className = 'body-online'
      return (
        <div className="container">
          <SplitText
            initialPose="exit"
            pose="enter"
            charPoses={charPoses}
            className="text">
            Qfsxp9mKfpEyOnPrAwTD7lPO2f7MDaCQa
          </SplitText>
          <br />
          <SplitText
            initialPose="exit"
            pose="enter"
            charPoses={charPoses}
            className="text">
            jlqKDywDSIVO5dD9e1gh4HlgT32p5E5qX
          </SplitText>
          <br />
          <SplitText
            initialPose="exit"
            pose="enter"
            charPoses={charPoses}
            className="text">
            XtiJ68CN7PRMGevZlVyhCl+YlwnjSPxPO
          </SplitText>
          <br />
          <SplitText
            initialPose="exit"
            pose="enter"
            charPoses={charPoses}
            className="text">
            SK4DFAwvFc9NZN3hL9jHFifZQYgtgJ7fp
          </SplitText>
          <br />
          <SplitText
            initialPose="exit"
            pose="enter"
            charPoses={charPoses}
            className="text">
            ePPDcy916Q49/a4c2QHxYu2/+Oj7UiI+E
          </SplitText>
          <br />
          <SplitText
            initialPose="exit"
            pose="enter"
            charPoses={charPoses}
            className="text">
            slacrQ=
          </SplitText>
        </div>
      )
    }

    document.body.className = 'body-offline'
    return (
      <div className="container">
        <SplitText
          initialPose="exit"
          pose="enter"
          charPoses={charPoses}
          className="text">
          -----BEGIN RSA PRIVATE KEY-----
        </SplitText>
        <br />
        <SplitText
          initialPose="exit"
          pose="enter"
          charPoses={charPoses}
          className="text">
          MIICWwIBAAKBgH3+xZaH9cPwK4VvfYdLCjTBf5emnhj4sl3mM8efyV8ic5dUgK4w
        </SplitText>
        <br />
        <SplitText
          initialPose="exit"
          pose="enter"
          charPoses={charPoses}
          className="text">
          cYMuY8wCNztt4O19+oPTY85aGHz7J8aP+QcLFTsdRwujKhYjHKwSPeJY3cJAv2YI
        </SplitText>
        <br />
        <SplitText
          initialPose="exit"
          pose="enter"
          charPoses={charPoses}
          className="text">
          OUJz/ZflcwBAAupniLYPDHAYKkoMmmaoQTr2vpKEb5ruWtqXvs2kDxTHAgMBAAEC
        </SplitText>
        <br />
        <SplitText
          initialPose="exit"
          pose="enter"
          charPoses={charPoses}
          className="text">
          gYBJvNhAn/N6p82guz449vbTJ0eYJmAydyJUiAxX0TEWJ2CE+WSSDTHxty2a0NUo
        </SplitText>
        <br />
        <SplitText
          initialPose="exit"
          pose="enter"
          charPoses={charPoses}
          className="text">
          R8cy1t7NVeL8eogIZSjDMbFo1NDDEjuKxpVYNZHSYCy79HRWqEWc0m9SHhHKqSUI
        </SplitText>
        <br />
        <SplitText
          initialPose="exit"
          pose="enter"
          charPoses={charPoses}
          className="text">
          HH12rqhAi5FHcuuTOMghYrbNB8VAZjcBzpyFc65sbjW1OQJBAMzI+KbwJmfYMvyS
        </SplitText>
        <br />
        <SplitText
          initialPose="exit"
          pose="enter"
          charPoses={charPoses}
          className="text">
          DUopB2dc5Sgfv0CjQr4jMak7IZ9d8a7b45cupqTrNlkGneVZoi9t9Cg8BfAeeFLB
        </SplitText>
        <br />
        <SplitText
          initialPose="exit"
          pose="enter"
          charPoses={charPoses}
          className="text">
          x8Zi9UUCQQCdgWjJhrK0eyZ/KJDRjUTRzC88K4+9LfCd4rloDTmA/XsWMRiGXVD2
        </SplitText>
        <br />
        <SplitText
          initialPose="exit"
          pose="enter"
          charPoses={charPoses}
          className="text">
          A0d+PTVUYW2M/37oJ/ffHEyW4prDSYSbAkAHTW9YfJ3R/CqtSQQCTf4+mFhvmto2
        </SplitText>
        <br />
        <SplitText
          initialPose="exit"
          pose="enter"
          charPoses={charPoses}
          className="text">
          EtxRbW3a7Anh5fa1VpACFx7IKL8SY6MDx7N534DiYmmPy3Zc9R4LnAHFAkAnlvSY
        </SplitText>
        <br />
        <SplitText
          initialPose="exit"
          pose="enter"
          charPoses={charPoses}
          className="text">
          2yOmG+JUSgUEtyaaOWGSFTz/B0IY3XlO/yv6ETzUGikY9PG5tJ9OyuHRwN+BdmMW
        </SplitText>
        <br />
        <SplitText
          initialPose="exit"
          pose="enter"
          charPoses={charPoses}
          className="text">
          xZ0XVoylzHWsKpmLAkEAtwKomz1GpjsrrlWZPmgtOx4m2L2AvvETSIjhSUk3yQqq
        </SplitText>
        <br />
        <SplitText
          initialPose="exit"
          pose="enter"
          charPoses={charPoses}
          className="text">
          AsiSuqQ2XUI/sIQ+0vQTlp3kaiUr5RU31WCq6b/mmQ==
        </SplitText>
        <br />
        <SplitText
          initialPose="exit"
          pose="enter"
          charPoses={charPoses}
          className="text">
          -----END RSA PRIVATE KEY-----
        </SplitText>
      </div>
    )
  }
}

export default App
