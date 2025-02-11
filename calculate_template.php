<div class="container_bisnu">
  <div id="form_bisnu">
    <div>
      <label>Dónde se encuentra el inmueble</label>
      <select class="input_bisnu" id="location">
        <option value="">Selecciona</option>
        <option value="7">Andalucía</option>
        <option value="8">Aragón</option>
        <option value="8">Asturias</option>
        <option value="8">Baleares</option>
        <option value="6.5">Canarias</option>
        <option value="10">Cantabria</option>
        <option value="9">Castilla - La Mancha</option>
        <option value="8">Castilla León</option>
        <option value="10">Cataluña</option>
        <option value="6">Ceuta</option>
        <option value="6">Comunidad de Madrid</option>
        <option value="10">Comunidad Valenciana</option>
        <option value="8">Extremadura</option>
        <option value="9">Galicia</option>
        <option value="7">La Rioja</option>
        <option value="6">Melilla</option>
        <option value="8">Murcia</option>
        <option value="6">Navarra</option>
        <option value="4">País Vasco</option>
      </select>
    </div>

    <div>
      <label>Precio del inmueble</label>
      <div id="property_parent" class="input_parent">
        <input
                value="450.000€"
                class="input_bisnu"
                type="text"
                id="property_price"
                placeholder="100,000€"
        />
        <button id="left_btn">&minus;</button>
        <button id="right_btn">&plus;</button>
      </div>
      <input step="10000" max="1000000" min="0" type="range" class="input_range" id="property_price_range">

    </div>

    <div>
      <label>Ahorro aportado</label>
      <div id="savings_parent" class="input_parent">
        <input
                value="20.000€"
                class="input_bisnu"
                type="text"
                id="savings"
                placeholder="50,000€"
        />
        <button id="left_btn">&minus;</button>
        <button id="right_btn">&plus;</button>
        <p id="saving_percentage_p">0%</p>
      </div>
      <input step="10000" max="1000000" min="0" type="range" class="input_range" id="discount_price_range">
    </div>

    <div>
      <label>Años de hipoteca</label>
      <div id="years_parent" class="input_parent">
      <input
              value="30"
              class="input_bisnu"
              type="number"
              id="mortgage_years"
              placeholder="30"
      />
      <button id="left_btn">&minus;</button>
      <button id="right_btn">&plus;</button>
      </div>
      <input min="5" max="40" type="range" class="input_range" id="years_range">

    </div>

    <div>
      <label>Tipo de interés</label>
      <select class="input_bisnu" id="interest_type">
        <option selected value="fixed">Fijo</option>
        <option value="variable">Variable</option>
      </select>
    </div>

    <div>
      <label>Tasa de interés (anual)</label>
      <div id="parcent_input_parent">
        <input
                value="2"
                class="input_bisnu"
                type="number"
                id="interest_rate"
                placeholder="2"
        />

        <span>
          %
        </span>
      </div>

    </div>
  </div>

  <div id="result_container">
    <div id="result_bisnu_one">
      <p class="result_heading">Tu cuota mensual:</p>
      <h3>350€</h3>
      <p class="result_sub_heading">Importe hipoteca</p>
      <p>110.500€</p>
    </div>

    <div id="result_bisnu_two">
      <div class="bisnu_fddfAet">
        <p class="result_heading">Coste total de la compra</p>
        <h3 id="result_price_bisnu" class="costeTotalDeLaCompra">110.500€</h3>

        <div id="bisnu_inside_two_one">
          <div>
            <p  class="result_sub_heading">Precio del inmueble</p>
            <h3 id="result_price_bisnu" class="precioDelInmueble">0€</h3>
          </div>

          <div>
            <p class="result_sub_heading">Impuestos y gastos</p>
            <h3 id="result_price_bisnu" class="impuestosAndGastos">0€</h3>
          </div>
        </div>
      </div>

      <div>
        <p class="result_heading">Total con hipoteca</p>
        <h3 id="result_price_bisnu" class="totalImpuestosGastos">0€</h3>

        <div id="bisnu_inside_two_two">
          <div>
            <p class="result_sub_heading">Ahorro aportado</p>
            <h3 id="result_price_bisnu" class="ahorroAportado">0€</h3>
          </div>
          <div>
            <p class="result_sub_heading">importe hipoteca</p>
            <h3 id="result_price_bisnu" class="importeHipoteca">0€</h3>
          </div>
          <div>
            <p class="result_sub_heading">Interés hipoteca</p>
            <h3 id="result_price_bisnu" class="InteresHipoteca">0€</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>