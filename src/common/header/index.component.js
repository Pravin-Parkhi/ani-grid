import "./index.component.scss"

export default function Header(){
  return(
    <div className="header-wrapper">
      <div className="container">
        <img
          alt="Animall"
          className="brand-logo"
          src="https://static-assets.animall.in/static/images/animall-logo-white.png"
        />
      </div>
    </div>
  )
}