import React from 'react';

const Dash = props => {

    return (
        <div className='tableauPlaceholder' style={{'width': '1920px', 'height': '857px'}}>
        <object className='tableauViz' width='1920' height='857' style={{'display': 'none'}}>
        <param name='host_url' value='https%3A%2F%2Fus-east-1.online.tableau.com%2F' />
        <param name='embed_code_version' value='3' />
        <param name='site_root' value='&#47;t&#47;logai' />
        <param name='name' value='Book1&#47;Sheet1' />
        <param name='tabs' value='no' />
        <param name='toolbar' value='yes' />
        <param name='showAppBanner' value='true' />
        <param name='filter' value='iframeSizedToWindow=true' />
        </object>
        </div>
    )
}

export default Dash