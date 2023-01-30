
class ErrorManager {

    showError(error) {
        if(typeof error === 'object'){
            Object.keys(error).forEach((key, index) => {
                this.#show(error[key])
            })
        } else {
            this.#show(error)
        }
    }

    #show(error) {
        const errorArea = document.createElement('div')
        errorArea.innerHTML = `<label class="error-label">
                                <input type="checkbox" class="errorCheckbox" autoComplete="off"/>
                                    <div class="alert error">
                                        <span class="errorText">
                                        ${error}
		                                <br class="clear"/>
                                        </span>
                                    </div>
                                </label>`;
        document.body.appendChild(errorArea);

        setTimeout(() => {
            let animateBlock = errorArea.animate([
                {opacity: 1},
                {opacity: 0}
            ], {duration: 400, easing: 'ease-in-out', fill: 'forwards'});
            animateBlock.addEventListener('finish', () => { errorArea.classList.add('hiddenBlock') });
        },4500)
        setTimeout(() => {
            document.body.removeChild(errorArea);
        },5000)
    }

}

const $error = new ErrorManager()
export { $error };
