const nodeClickHandler = ({
  rowNumber,
  nodeData,
  activeNodeIndex,
  rowData,
}: {
  rowNumber: number;
  nodeData: { [key: string]: any };
  activeNodeIndex: number;
  rowData: Array<any>;
}) => {
  let parsedRowData = JSON.parse(JSON.stringify(rowData));

  parsedRowData = parsedRowData.slice(0, rowNumber + 1);

  const rowsModifierHandler = (rowNo: number, data: any) => {
    parsedRowData[rowNo] = data?.children;

    if (rowNo > 0) {
      parsedRowData[rowNo].forEach((item: any, i: number) => {
        parsedRowData[rowNo][i].isNodeActive = false;
      });
      parsedRowData[rowNo][0].isNodeActive = true;
    }

    if (data?.children?.length && data?.children[0]?.children?.length) {
      rowsModifierHandler(rowNo + 1, data?.children[0]);
    }
  };

  if (nodeData?.children?.length) {
    rowsModifierHandler(rowNumber + 1, nodeData);
  }

  parsedRowData[rowNumber === -1 ? 0 : rowNumber].forEach(
    (item: any, i: number) => {
      parsedRowData[rowNumber === -1 ? 0 : rowNumber][i].isNodeActive = false;
    }
  );

  parsedRowData[rowNumber === -1 ? 0 : rowNumber][
    activeNodeIndex
  ].isNodeActive = true;

  return parsedRowData;
};

export { nodeClickHandler };
