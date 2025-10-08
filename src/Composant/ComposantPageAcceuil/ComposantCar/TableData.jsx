function TableData() {
  return (
    <div className=" flex bg-amber-400 rounded-2xl w-150 h-50  justify-center">
      <table className=" text-black table-auto">
        <thead>
          <tr className=" table-auto md:table-fixed ">
            <th>ID</th>
            <th>Disponibilité</th>
            <th>Véhicule</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Test 1</td>
            <td>Test 2</td>
            <td>Test 3</td>
          </tr>
          <tr>
            <td>Test 4</td>
            <td>Test 5</td>
            <td>Test 6</td>
          </tr>
          <tr>
            <td>Test 7</td>
            <td>Test 8</td>
            <td>Test 9</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableData;
