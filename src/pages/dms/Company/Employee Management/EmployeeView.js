import React from 'react';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';
import { Row, Col, Card, Image, Table } from 'react-bootstrap';
import profile_img from '../../../../assets/images/profile.png';

export const EmployeeView = () => {
    // Dummy employee data (replace with actual fetched data)
    const employee = {
        profilePhoto: profile_img,
        firstName: "Alex",
        lastName: "Johnson",
        email: "alex.johnson@example.com",
        phone: "9123456780",
        gender: "Male",
        dob: "1990-05-15",
        contractStart: "2024-01-01",
        contractEnd: "2025-01-01",
        department: "Engineering",
        designation: "Frontend Developer",
        role: "Admin",
        permissions: {
            Dashboard: {
                "Dashboard": {
                    Self: { View: true },
                    Global: { View: false },
                },
            },
            User: {
                "User List": {
                    Self: { View: true, Add: true, Edit: false, Delete: false },
                    Global: { View: false, Add: false, Edit: false, Delete: false },
                },
            },
        },
    };

    return (
        <AdminLayout>
            <div className="dms-container">
                <Row className="mb-4">
                    <Col md={12}>
                        <Card className="p-3 d-flex flex-md-row align-items-center gap-4">
                            <Image src={employee.profilePhoto} roundedCircle width="100" height="100" />
                            <div className="w-100">
                                <Row>

                                    <h4>{employee.firstName} {employee.lastName}</h4>
                                    <Col md={6}>
                                        <p className="mb-1"><strong>Email:</strong> {employee.email}</p>
                                        <p className="mb-1"><strong>Phone:</strong> {employee.phone}</p>
                                        <p className="mb-1"><strong>Status:</strong> <span className="badge bg-success">Active</span></p>
                                    </Col>
                                    <Col md={6}>
                                        <p className="mb-1"><strong>Gender:</strong> {employee.gender}</p>
                                        <p className="mb-1"><strong>Date of Birth:</strong> {employee.dob}</p>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md={6}>
                        <Card className="p-3">
                            <h5>Contract Details</h5>
                            <p><strong>Start Date:</strong> {employee.contractStart}</p>
                            <p><strong>End Date:</strong> {employee.contractEnd}</p>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="p-3">
                            <h5>Job Info</h5>
                            <Row>
                                <Col md={6}> 
                                    <p><strong>Department:</strong> {employee.department}</p>
                                </Col>
                                <Col md={6}>
                                    <p><strong>Role:</strong> {employee.role}</p>
                                </Col>
                            </Row>
                            <p><strong>Designation:</strong> {employee.designation}</p>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <Card className="p-3">
                            <h5 className="mb-3">Permissions</h5>
                            <Table bordered responsive>
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Sub Feature</th>
                                        <th>Scope</th>
                                        <th>Capabilities</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(employee.permissions).map(([feature, subFeatures]) => (
                                        Object.entries(subFeatures).map(([subName, scopes]) => (
                                            ['Self', 'Global'].map(scope => (
                                                <tr key={`${subName}-${scope}`}>
                                                    {scope === 'Self' && (
                                                        <td rowSpan="2">{feature}</td>
                                                    )}
                                                    {scope === 'Self' && (
                                                        <td rowSpan="2">{subName}</td>
                                                    )}
                                                    <td>{scope}</td>
                                                    <td>
                                                        {Object.entries(scopes[scope] || {}).map(([cap, val]) => (
                                                            val && <span key={cap} className="badge bg-primary me-1">{cap}</span>
                                                        ))}
                                                    </td>
                                                </tr>
                                            ))
                                        ))
                                    ))}
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
            </div>
        </AdminLayout>
    );
};
