import React from "react";

const countdownActions = (dispatcher) => ({
    tick(currentCount) {
        dispatcher.handleAction({ type: 'TICK'})
    },
    reset(count) {
        dispatcher.handleAction({
            type: 'RESET',
            count
        })
    }
})





/*function countActions (dispatcher) {
    function tick() {
        dispatcher.handleAction( {type: 'TICK'} )
    }
    function reset(count) {
        dispatcher.handleAction({
            type: 'RESET',
            count
        })
    }
    return ({
        tick, reset
    });
}*/

