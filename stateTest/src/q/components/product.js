import styled from "styled-components";

function ProductCard({ onNavigate, product }) {
  return (
    <Card onClick={() => onNavigate(product.productNumber)}>
      <ProductName>{product.productName}</ProductName>
      <ProductInfo>상품번호: {product.productNumber}</ProductInfo>
      <ProductInfo>가격: {product.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</ProductInfo>
      <ProductInfo>사이즈: {product.productSize}</ProductInfo>
      <ProductInfo>평점: {product.productRating}</ProductInfo>
      <ProductInfo>리뷰: {product.productReview}</ProductInfo>
    </Card>
  );
}

export default ProductCard;

const Card = styled.li`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 280px;
 
`;

const ProductName = styled.h4`
  color: #333;
  margin-bottom: 8px;
`;

const ProductInfo = styled.p`
  color: #666;
  margin: 4px 0;
`;