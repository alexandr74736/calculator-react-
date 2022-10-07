let renderEntireTree = () => {
    console.log('State changed')
}



let state = {
    items: [
        { id: 1, min: 1000000, max: 6000000, values: 6000000, step: 10000 },
        { id: 2, min: 10, max: 60, values: 60, step: 1, initialPayment: 3600000, },
        { id: 3, min: 1, max: 60, values: 60, step: 1 },
    ],
    monthPay: 96213,
    leasAmount: 9372780,
    focusedValue: 0,
    disabledStatus: false,
}

export const initialPayment = () => {
    let initPayment = (state.items[0].values / 100) * state.items[1].values;
    state.items[1].initialPayment = initPayment;
    renderEntireTree(state);
}

export const leasingAmount = () => {
    let sum = state.items[1].initialPayment + state.items[2].values * state.monthPay;
    state.leasAmount = sum;
    
    renderEntireTree(state);
}

export const monthlyPayment = () => {
    const price = state.items[0].values;
    const initial = state.items[1].initialPayment;
    const months = state.items[2].values;
    const monthPay = (price - initial) * ((0.035 * Math.pow((1 + 0.035), months)) / (Math.pow((1 + 0.035), months) - 1));
    state.monthPay = Math.round(monthPay);

    renderEntireTree(state);
}

export const changeValue = (id, newValue) => {
    const maxLength = (String(newValue).length >= String(state.items[id].max).length)
    const maxValue = (newValue > state.items[id].max)
    const minLength = (String(newValue).length >= String(state.items[id].min).length)
    const minValue = (newValue < state.items[id].min)

    if ((maxLength & maxValue) || isNaN(newValue)) {
        newValue = state.items[id].max
        state.focusedValue = newValue
        renderEntireTree(state);
    }
    if ((minLength & minValue) || isNaN(newValue)) {
        newValue = state.items[id].min
        state.focusedValue = newValue
        renderEntireTree(state);
    }

    state.items[id].values = newValue;

    initialPayment()
    monthlyPayment()
    leasingAmount()

    if (!minLength) {
        resetSum()
    }
    renderEntireTree(state);
}

export const resetSum = () => {
    state.items[1].initialPayment = '';
    state.monthPay = ''
    state.leasAmount = ''
    renderEntireTree(state);
}

export const focusedValue = (focusedValue) => {
    state.focusedValue = focusedValue;
    return state.focusedValue
}

export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export const postRequest = () => {
    const request = {
        "car_coast": state.items[0].values,
        "initail_payment": state.items[1].initialPayment,
        "initail_payment_percent": state.items[1].values,
        "lease_term": state.items[2].values,
        "total_sum": state.leasAmount,
        "monthly_payment_from": state.monthPay
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: request })
    };

    /* Hidden to avoid exceeding requests, uncomment for testing*/

    // fetch('https://hookb.in/eK160jgYJ6UlaRPldJ1P', requestOptions)
    //     .then(response => response.json())
    //     .then(data => console.log(data));

    /* Hidden to avoid exceeding requests, uncomment for testing*/
    
    console.group('success')
    console.log(request)
    console.log(requestOptions)
    console.groupEnd();
}

export const isDisabled = (status) => {
    state.disabledStatus = status;
    renderEntireTree(state);
    /* For imitated request */
    setTimeout(() => {
        state.disabledStatus = false;
        renderEntireTree(state);
    }, 2000);
}

export default state;