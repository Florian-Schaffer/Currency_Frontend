function currency() {
    return (
        <div>
            <ul className="currency">
                <h1>Currency Component</h1>
            </ul>
            <br></br>
        <label for="currencyfrom">Choose a currency to convert from:</label>

        <select name="currencyfrom" id="currency_from">
            <option value="DKK">Danish Krone (DKK)</option>
            <option value="USD">US Dollar (USD)</option>
            <option value="RUB">Russian Ruble (RUB)</option>
            <option value="EURO">Euro (Euro)</option>
        </select>

        <br></br>
        <label for="currencyto">Choose a currency to convert to:</label>

        <select name="currencyto" id="currency_to">
            <option value="DKK">Danish Krone (DKK)</option>
            <option value="USD">US Dollar (USD)</option>
            <option value="RUB">Russian Ruble (RUB)</option>
            <option value="EURO">Euro (Euro)</option>
        </select>


        <form>
            <label for="currency_amount">Amount to convert:</label> <br></br>
            <input type="number" id="currency_amount" name="amount"/>
        </form> <br></br>

        <button type="button">Convert</button>

        </div>
    );
}

export default currency();