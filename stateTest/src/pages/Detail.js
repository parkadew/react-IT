import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import productList from "../__mock__/products.json";

function DetailPage() {
  const { productNumber } = useParams();

  const navigate = useNavigate();
  const [product, setProduct] = useState();

  useEffect(() => {
    const foundProduct = productList.products.find(
      (product) => product.productNumber === productNumber
    );
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate("/");
    }
  }, [productNumber, navigate]);

  if (!product) {
    return;
  }

  return (
    <Container>
      <Card>
        <h1>{product.productName}</h1>
        <ProductInfo>상품번호: {product.productNumber}</ProductInfo>
        <ProductInfo>가격: {product.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</ProductInfo>
        <ProductInfo>사이즈: {product.productSize}</ProductInfo>
        <ProductInfo>평점: {product.productRating}</ProductInfo>
        <ProductInfo>리뷰: {product.productReview}</ProductInfo>
      </Card>
      <Card>
        <h2>상세 정보</h2>
        <p>{product.productDetail.productDetailInfo}</p>
      </Card>
      <Card>
        <h2>구매 후기</h2>
        {product.Review.map((review, index) => (
          <Review key={index}>
            <Reviewer>작성자: {review.reviewer}</Reviewer>
            <ReviewText>리뷰: {review.review}</ReviewText>
            <ReviewRating>평점: {review.rating}</ReviewRating>
          </Review>
        ))}
      </Card>
      <Card>
        <h2>리뷰 작성</h2>

      </Card>
    </Container>
  );
}

export default DetailPage;

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  h1, h2 {
    color: #333;
    margin-bottom: 15px;
  }

  p {
    color: #666;
    margin: 10px 0;
    font-size: 1.1rem;
  }
`;

const ProductInfo = styled.p`
  font-size: 1rem;
`;

const Review = styled.div`
  border-top: 1px solid #ddd;
  padding-top: 10px;
  margin-top: 10px;

  &:first-of-type {
    border-top: none;
    padding-top: 0;
    margin-top: 0;
  }
`;

const Reviewer = styled.p`
  font-weight: bold;
`;

const ReviewText = styled.p`
  
`;

const ReviewRating = styled.p`
  color: #ff9529;
`;

const ReviewForm = styled.form`
  display: grid;
  gap: 10px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;
