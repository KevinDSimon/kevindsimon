export default () => (
  <header id="Home" className="Section Hero">
    <div>
      <h1>Great design<br/> looks good,<br /> but works<br /> even better.</h1>
    </div>
    <style jsx>{`
      @media (max-width: 1224px) and (min-width: 390px) {
        h1 {
          font-size: 64px;
        }
      }
      @media (max-width: 1224px) {
        .Hero {
          padding-top: 192px;
        }
      }
      @media (max-width: 375px) {
        h1 {
          font-size: 44px;
        }
      }
    `}</style>
  </header>
)