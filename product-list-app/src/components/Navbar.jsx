export default function Navbar() {
  return (
    <>
      <nav style={{borderBottom: "2px solid #2c3e50", borderRadius: "5px", marginBottom: "20px"}}>
        <ul>
          <li><strong>Brand</strong></li>
        </ul>
        <ul>
          <li><input type="search" id="search" name="search" placeholder="Search" /></li>
          <li><a href="#">Link</a></li>
          <li><a href="#">Link</a></li>
          <li><a href="#" role="button">Button</a></li>
        </ul>
      </nav>
    </>
  )
}