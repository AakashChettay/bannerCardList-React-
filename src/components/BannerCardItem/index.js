import './index.css' // Changed import statement to use relative path and corrected component name
import React from 'react' // Import React
const BannerCardItem = props => {
  // Renamed component to start with a capital letter
  const {cardDetails} = props
  const {className, headerText, description} = cardDetails
  return (
    <li className={className}>
      <h1 className="headingStyle">{headerText}</h1>
      <p className="descriptionStyle">{description}</p>
      <button className="btnStyle">Show More</button>
    </li>
  )
}
export default BannerCardItem
