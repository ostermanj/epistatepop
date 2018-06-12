(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

(function () {
    /* global d3 */
    var data = returnKeyValues(window.stateData, false, true);

    document.getElementById('state-selector').onchange = selectState;

    createChart();

    function createChart() {
        var r = d3.scaleSqrt().domain([0, 39250017]).range([0, 50]);
        var svg = d3.select('#chart-container').append('svg').attr('viewBox', '0 0 100 100').append('g').attr('transform', 'translate(50,0)');

        svg.selectAll('circle').data(data).enter().append('circle').attr('r', function (d) {
            return r(d.Population);
        }).attr('cy', function (d) {
            return r(d.Population);
        }).attr('id', function (d) {
            return d.State.replace(' ', '-');
        });
    }

    function selectState() {
        console.log(this.value);

        var active = document.querySelector('circle.active');
        if (active) {
            active.classList.remove('active');
        }
        var selected = document.querySelector('circle#' + this.value.replace(' ', '-'));
        selected.classList.add('active');
        document.getElementById('state-name').innerText = this.value;

        var datum = d3.select('circle.active').datum();
        document.getElementById('description').innerText = '\n            ' + datum.State + ' ranks ' + datum.Rank + ' out of 50, with a population of ' + d3.format(',.0f')(datum.Population) + '.\n         ';
    }

    function returnKeyValues(values, nestBy) {
        var coerce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


        return values.slice(1).map(function (row) {
            return row.reduce(function (acc, cur, i) {

                // 1. params: total, currentValue, currentIndex[, arr]
                // 3. // acc is an object , key is corresponding value from row 0, value is current value of array

                acc[values[0][i]] = coerce === true ? isNaN(+cur) || cur === '' ? cur : +cur : cur;
                return acc;

                // test for empty strings before coercing bc +'' => 0
            }, {});
        });
    }
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYtanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLENBQUMsWUFBVTtBQUNQO0FBQ0EsUUFBSSxPQUFPLGdCQUFnQixPQUFPLFNBQXZCLEVBQWtDLEtBQWxDLEVBQXlDLElBQXpDLENBQVg7O0FBRUEsYUFBUyxjQUFULENBQXdCLGdCQUF4QixFQUEwQyxRQUExQyxHQUFxRCxXQUFyRDs7QUFFQTs7QUFFQSxhQUFTLFdBQVQsR0FBc0I7QUFDbEIsWUFBSSxJQUFJLEdBQUcsU0FBSCxHQUFlLE1BQWYsQ0FBc0IsQ0FBQyxDQUFELEVBQUcsUUFBSCxDQUF0QixFQUFvQyxLQUFwQyxDQUEwQyxDQUFDLENBQUQsRUFBRyxFQUFILENBQTFDLENBQVI7QUFDQSxZQUFJLE1BQU0sR0FBRyxNQUFILENBQVUsa0JBQVYsRUFDTCxNQURLLENBQ0UsS0FERixFQUVMLElBRkssQ0FFQSxTQUZBLEVBRVcsYUFGWCxFQUdMLE1BSEssQ0FHRSxHQUhGLEVBSUwsSUFKSyxDQUlBLFdBSkEsRUFJYSxpQkFKYixDQUFWOztBQU1BLFlBQUksU0FBSixDQUFjLFFBQWQsRUFDSyxJQURMLENBQ1UsSUFEVixFQUNnQixLQURoQixHQUVLLE1BRkwsQ0FFWSxRQUZaLEVBR0ssSUFITCxDQUdVLEdBSFYsRUFHZTtBQUFBLG1CQUFLLEVBQUUsRUFBRSxVQUFKLENBQUw7QUFBQSxTQUhmLEVBSUssSUFKTCxDQUlVLElBSlYsRUFJZ0I7QUFBQSxtQkFBSyxFQUFFLEVBQUUsVUFBSixDQUFMO0FBQUEsU0FKaEIsRUFLSyxJQUxMLENBS1UsSUFMVixFQUtnQjtBQUFBLG1CQUFLLEVBQUUsS0FBRixDQUFRLE9BQVIsQ0FBZ0IsR0FBaEIsRUFBb0IsR0FBcEIsQ0FBTDtBQUFBLFNBTGhCO0FBT0g7O0FBRUQsYUFBUyxXQUFULEdBQXNCO0FBQ2xCLGdCQUFRLEdBQVIsQ0FBWSxLQUFLLEtBQWpCOztBQUVBLFlBQUksU0FBUyxTQUFTLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBYjtBQUNBLFlBQUssTUFBTCxFQUFjO0FBQ1YsbUJBQU8sU0FBUCxDQUFpQixNQUFqQixDQUF3QixRQUF4QjtBQUNIO0FBQ0QsWUFBSSxXQUFXLFNBQVMsYUFBVCxDQUF1QixZQUFZLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsR0FBbkIsRUFBdUIsR0FBdkIsQ0FBbkMsQ0FBZjtBQUNBLGlCQUFTLFNBQVQsQ0FBbUIsR0FBbkIsQ0FBdUIsUUFBdkI7QUFDQyxpQkFBUyxjQUFULENBQXdCLFlBQXhCLEVBQXNDLFNBQXRDLEdBQWtELEtBQUssS0FBdkQ7O0FBRUEsWUFBSSxRQUFRLEdBQUcsTUFBSCxDQUFVLGVBQVYsRUFBMkIsS0FBM0IsRUFBWjtBQUNBLGlCQUFTLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUMsU0FBdkMsc0JBQ0ssTUFBTSxLQURYLGVBQzBCLE1BQU0sSUFEaEMseUNBQ3dFLEdBQUcsTUFBSCxDQUFVLE1BQVYsRUFBa0IsTUFBTSxVQUF4QixDQUR4RTtBQUdKOztBQUVELGFBQVMsZUFBVCxDQUF5QixNQUF6QixFQUFpQyxNQUFqQyxFQUF3RDtBQUFBLFlBQWYsTUFBZSx1RUFBTixLQUFNOzs7QUFHaEQsZUFBTyxPQUFPLEtBQVAsQ0FBYSxDQUFiLEVBQWdCLEdBQWhCLENBQW9CO0FBQUEsbUJBQU8sSUFBSSxNQUFKLENBQVcsVUFBQyxHQUFELEVBQU0sR0FBTixFQUFXLENBQVgsRUFBaUI7O0FBRTlEO0FBQ0E7O0FBRUksb0JBQUksT0FBTyxDQUFQLEVBQVUsQ0FBVixDQUFKLElBQW9CLFdBQVcsSUFBWCxHQUFrQixNQUFNLENBQUMsR0FBUCxLQUFlLFFBQVEsRUFBdkIsR0FBNEIsR0FBNUIsR0FBa0MsQ0FBQyxHQUFyRCxHQUEyRCxHQUEvRTtBQUNBLHVCQUFPLEdBQVA7O0FBRWtDO0FBQ3JDLGFBVGlDLEVBUy9CLEVBVCtCLENBQVA7QUFBQSxTQUFwQixDQUFQO0FBWUg7QUFDUixDQTFERCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIihmdW5jdGlvbigpe1xuICAgIC8qIGdsb2JhbCBkMyAqL1xuICAgIHZhciBkYXRhID0gcmV0dXJuS2V5VmFsdWVzKHdpbmRvdy5zdGF0ZURhdGEsIGZhbHNlLCB0cnVlKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0ZS1zZWxlY3RvcicpLm9uY2hhbmdlID0gc2VsZWN0U3RhdGU7XG5cbiAgICBjcmVhdGVDaGFydCgpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2hhcnQoKXtcbiAgICAgICAgdmFyIHIgPSBkMy5zY2FsZVNxcnQoKS5kb21haW4oWzAsMzkyNTAwMTddKS5yYW5nZShbMCw1MF0pO1xuICAgICAgICB2YXIgc3ZnID0gZDMuc2VsZWN0KCcjY2hhcnQtY29udGFpbmVyJylcbiAgICAgICAgICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgICAgICAuYXR0cigndmlld0JveCcsICcwIDAgMTAwIDEwMCcpXG4gICAgICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDUwLDApJyk7XG5cbiAgICAgICAgc3ZnLnNlbGVjdEFsbCgnY2lyY2xlJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpLmVudGVyKClcbiAgICAgICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgICAgICAuYXR0cigncicsIGQgPT4gcihkLlBvcHVsYXRpb24pKVxuICAgICAgICAgICAgLmF0dHIoJ2N5JywgZCA9PiByKGQuUG9wdWxhdGlvbikpXG4gICAgICAgICAgICAuYXR0cignaWQnLCBkID0+IGQuU3RhdGUucmVwbGFjZSgnICcsJy0nKSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlbGVjdFN0YXRlKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmFsdWUpO1xuXG4gICAgICAgIHZhciBhY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjaXJjbGUuYWN0aXZlJyk7XG4gICAgICAgIGlmICggYWN0aXZlICkge1xuICAgICAgICAgICAgYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NpcmNsZSMnICsgdGhpcy52YWx1ZS5yZXBsYWNlKCcgJywnLScpKTtcbiAgICAgICAgc2VsZWN0ZWQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdGUtbmFtZScpLmlubmVyVGV4dCA9IHRoaXMudmFsdWU7XG5cbiAgICAgICAgIHZhciBkYXR1bSA9IGQzLnNlbGVjdCgnY2lyY2xlLmFjdGl2ZScpLmRhdHVtKCk7XG4gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS5pbm5lclRleHQgPSBgXG4gICAgICAgICAgICAke2RhdHVtLlN0YXRlfSByYW5rcyAke2RhdHVtLlJhbmt9IG91dCBvZiA1MCwgd2l0aCBhIHBvcHVsYXRpb24gb2YgJHtkMy5mb3JtYXQoJywuMGYnKShkYXR1bS5Qb3B1bGF0aW9uKX0uXG4gICAgICAgICBgO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJldHVybktleVZhbHVlcyh2YWx1ZXMsIG5lc3RCeSwgY29lcmNlID0gZmFsc2Upe1xuICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXMuc2xpY2UoMSkubWFwKHJvdyA9PiByb3cucmVkdWNlKChhY2MsIGN1ciwgaSkgPT4geyBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gMS4gcGFyYW1zOiB0b3RhbCwgY3VycmVudFZhbHVlLCBjdXJyZW50SW5kZXhbLCBhcnJdXG4gICAgICAgICAgICAvLyAzLiAvLyBhY2MgaXMgYW4gb2JqZWN0ICwga2V5IGlzIGNvcnJlc3BvbmRpbmcgdmFsdWUgZnJvbSByb3cgMCwgdmFsdWUgaXMgY3VycmVudCB2YWx1ZSBvZiBhcnJheVxuICAgICAgICBcbiAgICAgICAgICAgICAgICBhY2NbdmFsdWVzWzBdW2ldXSA9IGNvZXJjZSA9PT0gdHJ1ZSA/IGlzTmFOKCtjdXIpIHx8IGN1ciA9PT0gJycgPyBjdXIgOiArY3VyIDogY3VyOyBcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGVzdCBmb3IgZW1wdHkgc3RyaW5ncyBiZWZvcmUgY29lcmNpbmcgYmMgKycnID0+IDBcbiAgICAgICAgICAgIH0sIHt9KSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9XG59KSgpOyJdfQ==
