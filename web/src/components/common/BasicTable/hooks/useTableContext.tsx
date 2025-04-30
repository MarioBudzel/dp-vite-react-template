import React from 'react';
import { TableContext } from '../context/TableContext';

const useTableContext = () => {
  const context = React.useContext(TableContext);

  if (!context) throw new Error('Table Context can only be used inside TableContext.Provider!');

  return context;
};

export default useTableContext;
