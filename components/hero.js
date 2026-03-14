export default () => (
  <header id="Home" className="Section Hero">
    <div><img src="../static/letter-mark2.svg" /></div>
    <div className="Section">
      <h1>Hey, I'm Kevin</h1>
    </div>
    <style jsx>{`
      img {
        height: 54px;
        width: 54px;
      }
      @media (max-width: 1224px) and (min-width: 390px) {
        h1 {
          font-size: 64px;
        }
      }
      @media (max-width: 1224px) {
        .Hero {
          padding-top: 80px;
        }
      }
      @media (max-width: 375px) {
        h1 {
          font-size: 32px;
        }
      }
    `}</style>
  </header>
)