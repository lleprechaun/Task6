
const Test = () => {

    /*----------------------------------HTML----------------------------------*/

    return (
        <div className={'flex-column test-content'}>
            <div className={'flex-column'}>
                <p>Score: <b>0</b></p>
                <p>Timer: <b>8</b></p>
                <p>7 x 2 = <b>?</b></p>
                <div className={'test_test-btn'}>
                    <button className={'test-btn'}>40</button>
                    <button className={'test-btn'}>30</button>
                    <button className={'test-btn'}>20</button>
                    <button className={'test-btn'}>23</button>
                </div>
                <button className={'test-btn'}>Go Back</button>
            </div>
        </div>
    )
}

export { Test }
