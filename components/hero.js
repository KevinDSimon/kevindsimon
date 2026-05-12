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
      @media (max-width: 1224px) {
        .Hero {
          padding-top: var(--spacing-80);
        }
      }
    `}</style>
  </header>
)