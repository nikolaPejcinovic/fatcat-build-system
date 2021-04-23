import { useState } from "react";

// Utils
import styled from "styled-components";

// Interfaces
import {
  HeaderProps,
  WrapperProps,
  FlexProps,
  RouteContainerProps
} from "interfaces/types";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 20px 120px;
  flex-direction: row;
  align-items: center;
  overflow: auto;
`;

const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  width: 500px;
  color: darkviolet;
  font-weight: bold;
`;

const RowWrapper = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const FlexWrapper = styled.div`
  display: flex;
  padding: 50px;
  box-sizing: border-box;
  width: 100%;
  border: 1px dotted darkviolet;
  border-radius: 5px;
  margin: 0 100px;
  height: 500px;
  min-width: 500px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  height: 30px;
  padding: 0 10px;
  color: darkviolet;
`;

export function RouteContainer({
  initSettings,
  children
}: RouteContainerProps): JSX.Element {
  const [settings, setSettings] = useState<
    HeaderProps | WrapperProps | FlexProps
  >(initSettings);

  const handleChange = (key: string, value: string) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [key]: value
    }));
  };

  return (
    <Wrapper>
      <SettingsWrapper>
        {Object.keys(settings).map(key => (
          <RowWrapper key={key}>
            {key}
            <Input
              value={settings[key]}
              onChange={({
                currentTarget
              }: React.FormEvent<HTMLInputElement>) =>
                handleChange(key, currentTarget.value)
              }
            />
          </RowWrapper>
        ))}
      </SettingsWrapper>
      <FlexWrapper>{children({ settings })}</FlexWrapper>
    </Wrapper>
  );
}
