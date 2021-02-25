import React, { HtmlHTMLAttributes } from 'react';

import { Container, Content, TextContent } from './styles';

interface ModalProps extends HtmlHTMLAttributes<HTMLDivElement> {
  onClose(): void;
}

const Modal: React.FC<ModalProps> = ({
  id = 'modal',
  children,
  onClose = () => {},
}) => {
  const handleOutsideClick = (e: React.MouseEvent<HTMLElement>) => {
    const click = e.target as HTMLButtonElement;
    if (click.id === id) onClose();
  };

  return (
    <Container id={id} onClick={handleOutsideClick}>
      <Content>
        <button onClick={onClose} />
        <TextContent>
          <p>{children}</p>
        </TextContent>
      </Content>
    </Container>
  );
};

export default Modal;
