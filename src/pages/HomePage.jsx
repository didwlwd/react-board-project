import React from 'react';
import styled from 'styled-components';
import { FaRegHeart } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa6';
import { MdOutlineComment } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Main = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
  text-align: left;
  margin: 10px 400px;
  gap: 0;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 20px;
`;

const Content = styled.div`
  padding: 5px;
`;

const ProfileImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 6px;
  margin-right: 10px;
  vertical-align: sub;
`;

const WriterPoto = styled.img`
  width: 200px;
  height: 140px;
  border-radius: 8px;
`;

const PostContent = styled.p`
  color: #707070;
`;

const UserNikName = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const PostFuter = styled.div`
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 380px;
  align-items: center;
`;

const AddPost = styled.button`
  background-color: #cecdcd;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 8px;
  height: 50px;

  &:hover {
    scale: 1.01;
    color: black;
  }
`;

const HomePage = () => {
  const navigater = useNavigate();
  return (
    <>
      <PostHeader>
        <div></div>
        <h2>게시글 목록</h2>
        <AddPost onClick={() => navigater('/addBoard')}>게시글 작성</AddPost>
      </PostHeader>

      <Main>
        <Content>
          <div>
            <ProfileImg
              src="data:image/png;base64,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"
              alt="프로필사진"
            />
            <UserNikName>유저 별명</UserNikName>
          </div>
          <h3>글 제목</h3>
          <PostContent>글 내용</PostContent>
          <PostFuter>
            <FaRegHeart color="#7c7c7c" />
            <span>22</span>
            <MdOutlineComment color="#7c7c7c" />
            <span>23</span>
            <span>2025-05-01</span>
          </PostFuter>
        </Content>

        <WriterPoto
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0PDQ0NDQ0PDg0NDQ8NDQ0QDg8QDw4NFhEWFhURFRUYHSggGBonGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0NFxAPGC0dFR0tKystLy0rLS0tMDctLi4vLystKy0tKystKystKysrKystLS0tLS0rKystLS0tLS0rK//AABEIAKgBLAMBIgACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAAAQIFAwQGB//EAD4QAAIBAgIGBgcGBQUBAAAAAAABAgMRBCEFEjFBUWEGInGBkbETMkJScqHBByNistHwJDNDc+EVU2Oi8RT/xAAaAQEBAAMBAQAAAAAAAAAAAAAAAQIEBQMG/8QALxEBAQACAQIDBgMJAAAAAAAAAAECAxEEIRIxUQUTM0Fx4bHB8BQiJDREYYGRof/aAAwDAQACEQMRAD8A+tAAybYAAAAAEKAMQUgAgAEAIFCFBDhAAAIARUABVCAAQAgAC5AqMhSBUAIwBARgCAjYZIyAgG3ABXgAAAAABCkAEDIAICBVIDGdSMc5SUU8rtpZ95FkZAxlJJXOpiLyppyerfrW4LcvIM8cLk7gPK4jHVqMrwm9vqu7i+VjvR6S0FTU6qlCV0pxS1rX3riiPbLpc5xx3bs4sRXjTi5S8Fm2cWEx9KrdU25Ws31Wlnsz2Gr6R4pU6VR36zi8/IykY6dNzzmNeax/SqUNK0JSk40fQyj6NPq9aS28X1T3mGxMKsI1KctaMldP6HxCvPXxMW8+rbstJv6ntNBaZeHS303ZSjxXvLmWx0Or6LtLhPJ9AOviMZSpq9Saiu9+R1/9ShKnrweUvVfLieQ05jG2zFp6enud79nvITUkpRacWrpp3TXFFPG9BNKuUqmEk7pL0tLln1orxT8T2QeW3XdeVxqEZSMPNCABQgIAMSsgVGQMjCoyFIBuAAV4AAAAACAEYEAIFCAADo6RoKpKnrK8KLdaXbZqK+cjuzmopybskm2+COhpCuoYac3k5r5vYic8PfTL45x9GOCko4eKex6kVHhGUkrfNmvxukG727EuZlgZueHws1tqOm3tytTcjWxotyfbv3snLpatWPjy8Xyriq3nPPPcltz7DKroiU2otdedkobefWZucFhows7Xlx3m5wOCUb1p+s9nJE4YbuomHeOlSwkcNhlFO7WTe9y3s8j0lrt05Z7+J6XT2LfWS2HjNL1U6bk87q9r9mfzM8rxOGx7P123x5edeIo1H6TW+J+RsY43NRT91mswzzk/dUmvCxwUqnWjnsf/AIOXV24y417jRePl6Nwb6t79hw6Qqtxe+xrdH4ldXhfxO1iXa63W8US+bn4Y8ZL0SrOOk8LbZKco90oSTR9bPkHRppY/DSv6tS59eZa0PaM42T6IyMpiyOeEKQCEZWYhYEbDIFQjDIAAIQbkAGTwAAAIUgAxKyBRkBAAAINbp6s40oxX9WpGD+FXk/L5mo6X1ksFK0mpaq1OOtu7zn6T1rVcMm8lry78v0OljpKrS60VK1nBPdJZp+JhlXY6PX4Zrz/vz/37NxTpKlSw8FtjTduTUFE6FOOq2+eXaczxSnTpTf8Atybz4uLsdOpXte/C/MyZa8Mu/Pn9240f1pxjvlJLsW82ulcQoR1d1jS9GZa9WLe6MpPsX+Wh0gxfWa5iNTPV4uomPo0OmsU833+B5TSlRujtySd+57zdaSqa2sv3sPO6VqWw/wASfmS3u+i6fGYyR56i3qyfOx1pO0sjvYanem+c/oa+p6wlZ53s22j6t8r7MzeVs4Rfd3M87o2O9782egTvTlf3b+BlWjn2yldTR09TE07cbo+1SPilJffwst0vGx9qe0NL2pO+F+v5IyFZA5SEZTFgGQEbDJGRggAgIQCAgVuwAZNcAAEAIwIAQKEAAhSAix4npzXar017tNP/ALS/QmGr3o33r5Gf2gYZ61CqllKMqTfCSetH5OXgajRNfWhOF9iR55u7psvT4WfJtcNiLYaCbu0rNvbmkzoY2tdpX2teGRxYerei0vapRnHtSzOljK9pJ7rfv5Dns3cMJLXrujGMSqTz/oSSXZKJ09MYtuV081t7OJrOj+L++hf2lKnbk4ZfOxhpWpnJ32oSvC6pN1y9ZHBUrX1994tmi0m16KMbbLnfp1M2u2xq9KXuluvZ9lyc929jeHUhlST4uT8jXShfWkbLEZU4q3svzOChRvFX4mUrDLP91zYSNor5m4oZ05/C7eBrXBqKS3/JGzw8bU897suxGTVy72MdGUdevBc7eL1fqfYGz5t0UwmtiqV17afdFOT8kfSCtD2llznjPSBCsxDmjIGQKjMSsjCoyFIQDEpGFQAhRvAAVrhCkAMxKyBQgIAIUAQIAitfp7Af/RhqlNevZTp/3I5rxzXefNdG1NStZ+rLK3bl5n1k+e9LtFujiXUgrQrXqQ5VPbj9e8xydDotvEuu/Nr8HlsX8qpODX4bv6M6+PpvNe67Ls3GUaqVbW9mvFSf9yKs15HbxFLWjfgrPs3Hly6l28WX1azBVHCUWtsWmvE72l31nbe7rs3M4I0LT1uXgc+KpuUabWdlbwyJ4jLZLxWupK8lf9s6ukIXzNzSwuaduZw4jDazimicp7+NHiKfVWW5I5aNDqpW2ZGxxGFvJJIs6FlbxMpWHvOY104dZL5G0jTdoxtd7O9nHhMM5T17bMo9pv8ARujJSlFe1Lf7sd7PSJdkx71teiOA1VKu9lvR0+efXl4pLuZ6Qwo04wjGEVaMUklyMjNx9uy7M7lQjDIGEQjYbMQoQMgAgIQGQEZVCXDIBvgAVroGCMCEKQKEAIBCkCgBAB0tLYCOIoypSyfrQl7k1sf74ncAWWy8x8txuj5wlOlNak1JNcIz4/C/qdnR0pXUZxz2SjxPdaU0ZSxEUpq04+pUW2PLmuRoK+iqtPNrNbKiu4SX4t6NfZjZ3jcnU848VrcXoySzhnF5pnYwmAbpu/rKWsl3WfkjvUqzStONue2PczljPVaks1y4Gr7zi92N358cNVLD6qeWy509Rtrib2s03xTOOlg45l8fdJuvDS0qF5ZrLPMxng5TlqpZvb2HoaGFjsS7WduhQhHKMbt7T2mR+0cNTgNFpJXWS9Ve8+L5HoMDhFC8n6728kctGjbN7fI5jYxnq88tuWXmEYIzNgMjBi2FGYsrIFQAhAZiVkKozErMWAZAQK9AQpCtYZiVkCoQpAAAMVQAAQhSFAAgUIwQK4KmEpyzcFfisn8jp19EQd9ScoPc8mjZkMMteOXnCPmeO0nWw9WpTqRV4ScWlsvua7rG96NYp4u6tZQinJ+VkdLpzhF6WpO2coQk+21vodj7OP5eI5OkvznK04/xFwvlLWvNmV2eGvVRwkFxZywpxjsSRkGdeYyeTY4QjZTEqhARsLBsxYZGFCAhAIGQKEYI2URkBAoAQg9AARmTWQhSBUABAIUhFCAhQAIFCABQgIAZAQK8t0zhdSf/ABLzZ0/s2l1MUudF/nNr0sjem3+B+Zp/s5eeKXKn5y/U5WHbrb+vk058d7cgZGdVuBiysjCozFsrZiwoyAhAIwQKEYZi2UGyAgUAIQAAB6AxKQya6EKQAADFUAIAIAVUIUgWIARgGyBkChAANL0njek/gl9DQfZ4/vcQvwJ+Ev8AJ6HpIvun8Mvoeb+z9/xNdcaT/PE5P9df8fg078d7sxZWYnWbsDFlZiFGYlZABiysjIqEYZGygzEMgUAIQAAAAIRXoDEAzayAAgEAIqEKCiEACoQAKMxYAVCFAEAAGq6QfyX2S+h5XoE/4ut/al+eIBycv57/AF+DSy+O94yMgOs3kZiwAqEYBBGRgFViyMAKxABBAAAIARQgBUf/2Q=="
          alt="글 사진"
        />
      </Main>
    </>
  );
};

export default HomePage;
