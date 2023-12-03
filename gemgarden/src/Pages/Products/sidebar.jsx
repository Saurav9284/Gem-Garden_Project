import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Sidebarfilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("category");
  const initialOrder = searchParams.getAll("order");
  const [material, setMaterial] = useState(initialCategory || []);
  const [order, setOrder] = useState(initialOrder || "");

  function handleCategory(e) {
    const { value } = e.target;
    let category = [...material];
    if (category.includes(value)) {
      category = category.filter((ele) => ele !== value);
    } else {
      category.push(value);
    }
    setMaterial(category);
  }
  function handleOrder(e) {
    setOrder(e.target.value);
  }

  useEffect(() => {
    let params = {
      material,
      order,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [material, order]);
  return (
    <DIV className="filter_section">
      <div>
        <Text fontSize={"1.5rem"} color={"#886305"}>
          Filter by Category
        </Text>
        <div>
          <input
            onChange={handleCategory}
            data-testid="recipe-indian"
            type="checkbox"
            value="Diamond"
            checked={material.includes("Diamond")}
          />
          <label>Diamond</label>
          <br />
          <input
            onChange={handleCategory}
            data-testid="recipe-italian"
            type="checkbox"
            value="Pearl"
            checked={material.includes("Pearl")}
          />
          <label>Pearl</label>
          <br />
          <input
            onChange={handleCategory}
            data-testid="recipe-chinese"
            type="checkbox"
            value="Gold"
            checked={material.includes("Gold")}
          />
          <label>Gold</label>
          <br />
          <input
            onChange={handleCategory}
            data-testid="recipe-thai"
            type="checkbox"
            value="Gemstone"
            checked={material.includes("Gemstone")}
          />
          <label>Gemstone</label>
          <br />
          <input
            onChange={handleCategory}
            data-testid="recipe-thai"
            type="checkbox"
            value="Solitaire"
            checked={material.includes("Solitaire")}
          />
          <label>Solitaire</label>
          <br />
        </div>
      </div>
      <br />
      <br />
      <div>
        <Text fontSize={"1.5rem"} color={"#886305"}>
          Sort By Price
        </Text>
        <div onChange={handleOrder}>
          <input
            defaultChecked={order === "asc"}
            value={"asc"}
            data-testid="recipe-sort-asc"
            type="radio"
            name="sort"
          />
          <label>Ascending</label>
          <br />
          <input
            defaultChecked={order === "desc"}
            value={"desc"}
            data-testid="recipe-sort-desc"
            type="radio"
            name="sort"
          />
          <label>Descending</label>
        </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  /* border-right: 1px solid gray; */
  text-align: left;
  /* margin-left: 20px; */
  /* box-shadow: 2px 2px 2px gray; */

  label {
    margin-left: 5px;
  }

  input,
  label {
    font-size: 1.5rem;
  }
`;