import React from "react";
import { Link } from "react-router-dom";
import RightArrow from "react-icons/lib/md/link";

import { Table } from "semantic-ui-react";

const CategoryList = ({ categories = [] }) => {
  return (
    <div className="category-list">
      <h3>Categories</h3>
      <Table selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Link</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {categories.map(category => (
            <Table.Row key={category.name}>
              <Table.Cell>{category.name}</Table.Cell>
              <Table.Cell>
                <Link to={`/categories/${category.path}`}>
                  <RightArrow />
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <ul />
    </div>
  );
};

export default CategoryList;
