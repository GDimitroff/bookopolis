import styled from 'styled-components';

const Filters = () => {
  return (
    <Wrapper>
      <div className="grades">
        <label htmlFor="grades">Клас</label>
        <select name="grades" id="grades">
          <option value="all">Всички</option>
          <option value="five">5 клас</option>
          <option value="six">6 клас</option>
          <option value="seven">7 клас</option>
          <option value="eight">8 клас</option>
          <option value="nine">9 клас</option>
          <option value="ten">10 клас</option>
          <option value="eleven">11 клас</option>
          <option value="twelve">12 клас</option>
        </select>
      </div>
      <div className="literature">
        <label htmlFor="literature">Вид литература</label>
        <select name="literature" id="literature">
          <option value="all">Всички</option>
          <option value="bulgarian">Българска</option>
          <option value="foreign">Чуждестранна</option>
        </select>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  gap: 12px;

  label {
    margin-right: 0.4rem;
  }
`;

export default Filters;
