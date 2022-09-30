import React from "react";

const MenuTree = ({
  rows,
  rowProps,
  CustomNodeComponent,
}: {
  rows: Array<any>;
  rowProps?: Object;
  CustomNodeComponent: React.FC<{
    rowNumber: number;
    nodeData: Object;
    activeNodeIndex: number;
  }>;
}) => {
  return (
    <>
      {rows.map((rowArr, rowNo) => {
        return (
          <div
            style={{ display: "flex" }}
            key={"menu-row-" + rowNo}
            {...rowProps}
          >
            {rowArr.map((rowItem: any, activeNodeIndex) => {
              return (
                <React.Fragment key={"row-node-" + activeNodeIndex}>
                  <CustomNodeComponent
                    rowNumber={rowNo}
                    nodeData={rowItem}
                    activeNodeIndex={activeNodeIndex}
                  />
                </React.Fragment>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export { MenuTree };
