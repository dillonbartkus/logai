import React from 'react';
import tableau from 'tableau-api';

class Tabdash extends React.Component {

    initTableau() {
        const vizUrl =
            "https://us-east-1.online.tableau.com/t/logai/views/Book1/Sheet1?iframeSizedToWindow=true&:embed=yes&:showAppBanner=false&:display_count=no&:showVizHome=no";
 
        const options = {
            hideTabs: false,
            onFirstInteractive: () => {
                const sheet = viz.getWorkbook().getActiveSheet()
                const options = {
                    ignoreAliases: false,
                    ignoreSelection: false,
                    includeAllColumns: false
                };
                sheet.getUnderlyingDataAsync(options).then((t) => {
                    const tableauData = t.getData();
                    let data = [];
                    const pointCount = tableauData.length;
                    for(let a = 0; a < pointCount; a++ ) {
                        data = data.concat({
                            x: tableauData[a][0].value,
                            y: Math.round(tableauData[a][3].value,2)
                        })
                    };
                })
            }
        };
 
        let viz = new window.tableau.Viz(this.container, vizUrl, options)

    }

    componentDidMount() {
        this.initTableau()
    }

    render() {

    return <div ref={ c => (this.container = c) } ></div>

    }
}

export default Tabdash;

