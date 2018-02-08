import React from 'react';

export const SideSelect = ({onClick}) => {
return (
<div className='SideSelect'>
<h2>Would you like to be X or O?</h2>
<span onClick={() => onClick('X')}>X</span><span onClick={() => onClick('O')}>O</span>
</div>

)

}
