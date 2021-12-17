import React from 'react';

const Pozadi = ({data, getChoice}) => {

  return (
      	
    <div className="field">
    <label className="field__label">Pozadí stránky</label>

    <div className="field__swatch-group field__swatch-group--round">
      {data.map((d, index) =>
        <div className="field__swatch" key={index} onClick={() => getChoice("background", d.value)}>
          <input type="radio"  name="background" id={`background-${d.value}`} />
          <label htmlFor={`background--${d.value}`} className={`swatch--${d.value}`} data-description={d.description}></label>
        </div>
      )}
    </div>

  </div>
  )
}

export default Pozadi;