import React from "react";
import { Link } from "react-router-dom";
import RightArrow from "react-icons/lib/md/link";

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

const CategoryList = ({ categories = [] }) => {
  return (
    <div className="category-list">
      <h3>Categories</h3>
      <Table selectable={false}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Link</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {categories.map(category => (
            <TableRow key={category.name}>
              <TableRowColumn>{category.name}</TableRowColumn>
              <TableRowColumn>
                <Link to={`/categories/${category.path}`}>
                  <RightArrow />
                </Link>
              </TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ul />
    </div>
  );
};

export default CategoryList;
