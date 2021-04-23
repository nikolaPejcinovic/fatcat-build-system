// Utils
import styled from "styled-components";

// Components
import { Heading } from "components/Heading";
import { Wrapper } from "components/Wrapper";
import { Flex } from "components/Flex";

const OverviewWrapper = styled.div`
  background: white;
  border-radius: 5px;
  padding: 20px;
  margin-top: 60px;
`;

const ComponentWrapper = styled.div`
  background: #f0f2f5;
  padding: 10px 40px 40px 40px;
  border-radius: 5px;
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const ComponentTitle = styled.h1`
  color: darkviolet;
`;

const Code = styled.code`
  font-size: 16px;
  font-weight: bold;
  color: darkviolet;
`;

const CodeWrapper = styled.div`
  background: white;
  display: flex;
  width: fit-content;
  padding: 0 30px;
  border-radius: 5px;

  > pre {
    margin: 0;
  }
`;

const CodeTitle = styled.h5`
  color: darkviolet;
  font-size: 16px;
  margin-bottom: 10px;
`;

const components = [
  {
    id: 1,
    title: "Heading Component",
    code: `
<Heading
  type="h3"
  fontSize="25px"
  fontWeight="bold"
  color="black"
  content="Some dummy content"
  height="fit-content"
/>
  `,
    props: {
      type: "h3",
      fontSize: "25px",
      fontWeight: "bold",
      color: "black",
      content: "Some dummy content",
      height: "fit-content"
    },
    Component: Heading
  },
  {
    id: 2,
    title: "Wrapper Component",
    code: `
<Wrapper
  mr="auto"
  ml="auto"
  width="500px"
  maxWidth="960px"
  height="200px"
  maxHeight="100%"
  pl="20px"
  pr="20px"
  backgroundColor="darkviolet"
  borderRadius="5px"
/>
  `,
    props: {
      mr: "auto",
      ml: "auto",
      width: "500px",
      maxWidth: "960px",
      height: "200px",
      maxHeight: "100%",
      pl: "20px",
      pr: "20px",
      backgroundColor: "darkviolet",
      borderRadius: "5px"
    },
    Component: Wrapper
  },
  {
    id: 3,
    title: "Flex Component",
    code: `
<Flex
  display="flex"
  flexDirection="column"
  alignItems="left"
  alignContent="center"
  alignSelf="center"
  justifyItems="center"
  justifyContent="center"
  justifySelf="center"
  flex="0 1 auto"
  flexWrap="wrap"
  width="100px"
/>
  `,
    props: {
      display: "flex",
      flexDirection: "column",
      alignItems: "left",
      alignContent: "center",
      alignSelf: "center",
      justifyItems: "center",
      justifyContent: "center",
      justifySelf: "center",
      flex: "0 1 auto",
      flexWrap: "wrap",
      width: "100px"
    },
    Component: Flex
  }
];

export function Overview(): JSX.Element {
  return (
    <OverviewWrapper>
      {components.map(({ id, title, code, props, Component }) => (
        <ComponentWrapper key={id}>
          <ComponentTitle>{title}</ComponentTitle>
          <CodeTitle>Code snippet with available props:</CodeTitle>
          <CodeWrapper>
            <pre>
              <Code>{code}</Code>
            </pre>
          </CodeWrapper>
          <CodeTitle>Example:</CodeTitle>
          <Component {...props} />
        </ComponentWrapper>
      ))}
    </OverviewWrapper>
  );
}
