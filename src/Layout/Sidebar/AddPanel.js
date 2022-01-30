import React from 'react';
import { Button, Input, Select } from 'antd';

function AddPanel({ showAddPanelButton, setShowAddPanelButton }) {
  const { Option } = Select;
  return (
    !showAddPanelButton && (
      <div>
        <Input
          placeholder="Enter Panel Name"
          style={{ width: '90%' }}
          size="medium"
        />
        <Select placeholder="Select" style={{ width: '90%' }}>
          <Option value="Sign Up">Sign Up</Option>
          <Option value="Sign In">Sign In</Option>
        </Select>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '95%',
            marginTop: '5px',
          }}
        >
          <Button
            type="button"
            size="small"
            style={{ background: 'none', border: 'none', color: 'grey' }}
            onClick={() => setShowAddPanelButton(true)}
          >
            Cancel
          </Button>
          <Button
            type="button"
            size="small"
            style={{ background: '#CA2B1C', border: 'none', color: '#fff' }}
          >
            Add Panel
          </Button>
        </div>
      </div>
    )
  );
}

export default AddPanel;
