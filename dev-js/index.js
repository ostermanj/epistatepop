(function(){
    /* global d3 */
    var data = returnKeyValues(window.stateData, false, true);

    document.getElementById('state-selector').onchange = selectState;

    createChart();

    function createChart(){
        var r = d3.scaleSqrt().domain([0,39250017]).range([0,50]);
        var svg = d3.select('#chart-container')
            .append('svg')
            .attr('viewBox', '0 0 100 100')
            .append('g')
            .attr('transform', 'translate(50,0)');

        svg.selectAll('circle')
            .data(data).enter()
            .append('circle')
            .attr('r', d => r(d.Population))
            .attr('cy', d => r(d.Population))
            .attr('id', d => d.State.replace(' ','-'));
        
    }

    function selectState(){
        console.log(this.value);

        var active = document.querySelector('circle.active');
        if ( active ) {
            active.classList.remove('active');
        }
        var selected = document.querySelector('circle#' + this.value.replace(' ','-'));
        selected.classList.add('active');
         document.getElementById('state-name').innerText = this.value;

         var datum = d3.select('circle.active').datum();
         document.getElementById('description').innerText = `
            ${datum.State} ranks ${datum.Rank} out of 50, with a population of ${d3.format(',.0f')(datum.Population)}.
         `;
    }

    function returnKeyValues(values, nestBy, coerce = false){
       
           
            return values.slice(1).map(row => row.reduce((acc, cur, i) => { 
            
            // 1. params: total, currentValue, currentIndex[, arr]
            // 3. // acc is an object , key is corresponding value from row 0, value is current value of array
        
                acc[values[0][i]] = coerce === true ? isNaN(+cur) || cur === '' ? cur : +cur : cur; 
                return acc;
        
                                                  // test for empty strings before coercing bc +'' => 0
            }, {}));
            
            
        }
})();