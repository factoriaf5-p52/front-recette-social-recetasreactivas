import React from "react";
import { StyledChip } from "./ChipStyle"

interface ChipProps {
    label: string;
    color?: string;
  }

  export const Chip: React.FC<ChipProps> = ({ label, color = '#007bff' }) => (
    <StyledChip color={color}>{label}
    
    </StyledChip>
  );
