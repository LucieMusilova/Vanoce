import React from 'react';

const Text = ({getChoice}) => {
  return (
      	
    <div className="field">
							<label className="field__label" htmlFor="text">Text uvnitř přáníčka</label>
							<textarea className="field__input" name="text" id="text" rows="3" maxLength="100" autoComplete="off" onChange={(event) => getChoice("text", event.target.value)}></textarea>
							<p className="field__description">Zbývá <strong>37</strong>/100 znaků.</p>
						</div>

  )
}

export default Text;
