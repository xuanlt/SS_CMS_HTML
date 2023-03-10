document.write('<!-- BEGIN Site Sidebar -->\n');
document.write('        <div class=\"site-sidebar\">\n');
document.write('            <div class=\"sidebar-header p-2\">\n');
document.write('                <!-- BEGIN Site Brand -->\n');
document.write('                <div class=\"site-brand\">\n');
document.write('                    <h1 class=\"site-title mb-0\">\n');
document.write('                        <a href=\"index.html\" class=\"site-link\"><img src=\"img/logo-full.svg\" class=\"site-logo full\" alt=\"\"><img src=\"img/logo-icon.svg\" class=\"site-logo icon\" alt=\"\"></a>\n');
document.write('                    </h1>\n');
document.write('                </div>\n');
document.write('                <!-- END Site Brand -->\n');
document.write('                <button class=\"btn btn-white btn-sidebar-toggle bg-transparent\"><i class=\"fa-solid fa-bars\"></i></button>\n');
document.write('            </div>\n');
document.write('            <!-- BEGIN Sidebar Content -->\n');
document.write('            <div class=\"sidebar-content p-2\">\n');
document.write('                <!-- BEGIN Sidebar Menu -->\n');
document.write('                <ul id=\"sidebar-nav\" class=\"nav sidebar-nav flex-column\">\n');
document.write('                    <li class=\"nav-item item-dashboard\">\n');
document.write('                        <a href=\"#\" class=\"nav-link active\"><span class=\"icon\"><i class=\"fa-regular fa-house-blank\"></i></span><span class=\"text\">Tổng quan</span></a>\n');
document.write('                    </li>\n');
document.write('                    <li class=\"nav-item item-space\"> </li>\n');
document.write('                    <li class=\"nav-item item-title\">Người dùng</li>\n');
document.write('                    <li class=\"nav-item item-customer\">\n');
document.write('                        <a href=\"#customerMenu\" class=\"nav-link\" data-bs-toggle=\"collapse\" role=\"button\" aria-expanded=\"false\" aria-controls=\"customerMenu\"><span class=\"icon\"><i class=\"fa-sharp fa-solid fa-users\"></i></span><span class=\"text\">Khách hàng</span></a>\n');
document.write('                        <ul id=\"customerMenu\" class=\"nav nav-sub-menu flex-column collapse\" data-bs-parent=\"#sidebar-nav\">\n');
document.write('                            <li class=\"nav-item item-customer-new\">\n');
document.write('                                <a href=\"#\" class=\"nav-link\">Thêm khách hàng</a>\n');
document.write('                            </li>\n');
document.write('                            <li class=\"nav-item item-customer-list\">\n');
document.write('                                <a href=\"#\" class=\"nav-link\">Danh sách Khách hàng</a>\n');
document.write('                            </li>\n');
document.write('                            <li class=\"nav-item item-customer-category\">\n');
document.write('                                <a href=\"#\" class=\"nav-link\">Nhóm khách hàng</a>\n');
document.write('                            </li>\n');
document.write('                        </ul>\n');
document.write('                    </li>\n');
document.write('                    <li class=\"nav-item item-employee\">\n');
document.write('                        <a href=\"#employeeMenu\" class=\"nav-link\" data-bs-toggle=\"collapse\" role=\"button\" aria-expanded=\"false\" aria-controls=\"employeeMenu\"><span class=\"icon\"><i class=\"fa-sharp fa-solid fa-user-group\"></i></span><span class=\"text\">Nhân viên</span></a>\n');
document.write('                        <ul id=\"employeeMenu\" class=\"nav nav-sub-menu flex-column collapse\" data-bs-parent=\"#sidebar-nav\">\n');
document.write('                            <li class=\"nav-item item-employee-new\">\n');
document.write('                                <a href=\"#\" class=\"nav-link\">Thêm mới nhân viên</a>\n');
document.write('                            </li>\n');
document.write('                            <li class=\"nav-item item-employee-list\">\n');
document.write('                                <a href=\"#\" class=\"nav-link\">Danh sách nhân viên</a>\n');
document.write('                            </li>\n');
document.write('                            <li class=\"nav-item item-employee-category\">\n');
document.write('                                <a href=\"#\" class=\"nav-link\">Nhóm nhân viên</a>\n');
document.write('                            </li>\n');
document.write('                        </ul>\n');
document.write('                    </li>\n');
document.write('                    <li class=\"nav-item item-user-privileges\">\n');
document.write('                        <a href=\"#userprivilegesMenu\" class=\"nav-link\" data-bs-toggle=\"collapse\" role=\"button\" aria-expanded=\"false\" aria-controls=\"userprivilegesMenu\"><span class=\"icon\"><i class=\"fa-sharp fa-solid fa-screen-users\"></i></span><span class=\"text\">Quản lý phân quyền</span></a>\n');
document.write('                        <ul id=\"userprivilegesMenu\" class=\"nav nav-sub-menu flex-column collapse\" data-bs-parent=\"#sidebar-nav\">\n');
document.write('                            <li class=\"nav-item item-privileges-group\">\n');
document.write('                                <a href=\"#\" class=\"nav-link\">Nhóm các quyền</a>\n');
document.write('                            </li>\n');
document.write('                            <li class=\"nav-item item-privileges-user\">\n');
document.write('                                <a href=\"#\" class=\"nav-link\">Quyền cho người dùng</a>\n');
document.write('                            </li>\n');
document.write('                        </ul>\n');
document.write('                    </li>\n');
document.write('                    <li class=\"nav-item item-space\"> </li>\n');
document.write('                    <li class=\"nav-item item-title\">Dịch vụ</li>\n');
document.write('                    <li class=\"nav-item item-service\">\n');
document.write('                        <a href=\"#serviceMenu\" class=\"nav-link\" data-bs-toggle=\"collapse\" role=\"button\" aria-expanded=\"false\" aria-controls=\"serviceMenu\"><span class=\"icon\"><i class=\"fa-solid fa-box\"></i></span><span class=\"text\">Gói dịch vụ</span></a>\n');
document.write('                        <ul id=\"serviceMenu\" class=\"nav nav-sub-menu flex-column collapse\" data-bs-parent=\"#sidebar-nav\">\n');
document.write('                            <li class=\"nav-item item-service-new\">\n');
document.write('                                <a href=\"#\" class=\"nav-link\">Tạo mới gói dịch vụ</a>\n');
document.write('                            </li>\n');
document.write('                            <li class=\"nav-item item-service-list\">\n');
document.write('                                <a href=\"#\" class=\"nav-link\">Danh sách nhóm</a>\n');
document.write('                            </li>\n');
document.write('                            <li class=\"nav-item item-service-category\">\n');
document.write('                                <a href=\"#\" class=\"nav-link\">Nhóm dịch vụ</a>\n');
document.write('                            </li>\n');
document.write('                        </ul>\n');
document.write('                    </li>\n');
document.write('                    <li class=\"nav-item item-contract\">\n');
document.write('                        <a href=\"#contractMenu\" class=\"nav-link\" data-bs-toggle=\"collapse\" role=\"button\" aria-expanded=\"false\" aria-controls=\"contractMenu\"><span class=\"icon\"><i class=\"fa-solid fa-address-card\"></i></span><span class=\"text\">Quản lý hợp đồng</span></a>\n');
document.write('                        <ul id=\"contractMenu\" class=\"nav nav-sub-menu flex-column collapse\" data-bs-parent=\"#sidebar-nav\">\n');
document.write('                            <li class=\"nav-item item-service-new\">\n');
document.write('                                <a href=\"#\" class=\"nav-link\">Thêm mới hợp đồng</a>\n');
document.write('                            </li>\n');
document.write('                            <li class=\"nav-item item-service-list\">\n');
document.write('                                <a href=\"#\" class=\"nav-link\">Danh sách hợp đồng</a>\n');
document.write('                            </li>\n');
document.write('                            <li class=\"nav-item item-service-category\">\n');
document.write('                                <a href=\"#\" class=\"nav-link\">Nhóm hợp đồng</a>\n');
document.write('                            </li>\n');
document.write('                        </ul>\n');
document.write('                    </li>\n');
document.write('                    <li class=\"nav-item item-wellyPoint\">\n');
document.write('                        <a href=\"#loyaltyMenu\" class=\"nav-link\" data-bs-toggle=\"collapse\" role=\"button\" aria-expanded=\"false\" aria-controls=\"loyaltyMenu\"><span class=\"icon\"><i class=\"fa-solid fa-hundred-points\"></i></span><span class=\"text\">Quản lý điểm thưởng</span></a>\n');
document.write('                        <ul id=\"loyaltyMenu\" class=\"nav nav-sub-menu flex-column collapse\" data-bs-parent=\"#sidebar-nav\">\n');
document.write('                            <li class=\"nav-item item-loyalty-list\">\n');
document.write('                                <a href=\"#\" class=\"nav-link\">Danh sách khách hàng</a>\n');
document.write('                            </li>\n');
document.write('                            <li class=\"nav-item item-service-category\">\n');
document.write('                                <a href=\"#\" class=\"nav-link\">Cấu hình Welly Points</a>\n');
document.write('                            </li>\n');
document.write('                        </ul>\n');
document.write('                    </li>\n');
document.write('                    <li class=\"nav-item item-class\">\n');
document.write('                        <a href=\"#classMenu\" class=\"nav-link\" data-bs-toggle=\"collapse\" role=\"button\" aria-expanded=\"false\" aria-controls=\"classMenu\"><span class=\"icon\"><i class=\"fa-solid fa-dumbbell\"></i></span><span class=\"text\">Quản lý lớp học</span></a>\n');
document.write('                        <ul id=\"classMenu\" class=\"nav nav-sub-menu flex-column collapse\" data-bs-parent=\"#sidebar-nav\">\n');
document.write('                            <li class=\"nav-item item-class-new\">\n');
document.write('                                <a href=\"#\" class=\"nav-link\">Thêm mới lớp học</a>\n');
document.write('                            </li>\n');
document.write('                            <li class=\"nav-item item-class-list\">\n');
document.write('                                <a href=\"#\" class=\"nav-link\">Danh sách lớp học</a>\n');
document.write('                            </li>\n');
document.write('                            <li class=\"nav-item item-class-category\">\n');
document.write('                                <a href=\"#\" class=\"nav-link\">Nhóm lớp học</a>\n');
document.write('                            </li>\n');
document.write('                        </ul>\n');
document.write('                    </li>\n');
document.write('                    <li class=\"nav-item item-space\"> </li>\n');
document.write('                    <li class=\"nav-item item-title\">Khác</li>\n');
document.write('                    <li class=\"nav-item item-class\">\n');
document.write('                        <a href=\"#reportMenu\" class=\"nav-link\" data-bs-toggle=\"collapse\" role=\"button\" aria-expanded=\"false\" aria-controls=\"reportMenu\"><span class=\"icon\"><i class=\"fa-solid fa-chart-simple\"></i></span><span class=\"text\">Báo cáo</span></a>\n');
document.write('                        <ul id=\"reportMenu\" class=\"nav nav-sub-menu flex-column collapse\" data-bs-parent=\"#sidebar-nav\">\n');
document.write('                            <li class=\"nav-item item-report-finance\">\n');
document.write('                                <a href=\"#\" class=\"nav-link\">Báo cáo tài chính</a>\n');
document.write('                            </li>\n');
document.write('                            <li class=\"nav-item item-report-funds\">\n');
document.write('                                <a href=\"#\" class=\"nav-link\">Sô quỹ</a>\n');
document.write('                            </li>\n');
document.write('                            <li class=\"nav-item item-report-calendar\">\n');
document.write('                                <a href=\"#\" class=\"nav-link\">Nhắc lịch</a>\n');
document.write('                            </li>\n');
document.write('                        </ul>\n');
document.write('                    </li>\n');
document.write('                    <li class=\"nav-item item-class\">\n');
document.write('                        <a href=\"#kpiMenu\" class=\"nav-link\" data-bs-toggle=\"collapse\" role=\"button\" aria-expanded=\"false\" aria-controls=\"kpiMenu\"><span class=\"icon\"><i class=\"fa-sharp fa-solid fa-flag-swallowtail\"></i></span><span class=\"text\">KPI</span></a>\n');
document.write('                        <ul id=\"kpiMenu\" class=\"nav nav-sub-menu flex-column collapse\" data-bs-parent=\"#sidebar-nav\">\n');
document.write('                            <li class=\"nav-item item-kpi-new\">\n');
document.write('                                <a href=\"#\" class=\"nav-link\">Thêm mới</a>\n');
document.write('                            </li>\n');
document.write('                            <li class=\"nav-item item-kpi-list\">\n');
document.write('                                <a href=\"#\" class=\"nav-link\">Danh sách KPI</a>\n');
document.write('                            </li>\n');
document.write('                            <li class=\"nav-item item-kpi-report\">\n');
document.write('                                <a href=\"#\" class=\"nav-link\">Báo cáo</a>\n');
document.write('                            </li>\n');
document.write('                        </ul>\n');
document.write('                    </li>\n');
document.write('                </ul>\n');
document.write('                <!-- END Sidebar Menu -->\n');
document.write('                <p> </p>\n');
document.write('                <hr class=\"my-3\">\n');
document.write('                <div class=\"heading-group-title small text-uppercase opacity-50 my-2\">Menu</div>\n');
document.write('                <!-- BEGIN Sidebar Menu Tree -->\n');
document.write('                <ul class=\"sidebar-menu tree\" data-widget=\"tree\">\n');
document.write('                    <li class=\"treeview menu-opened active\"><a href=\"javascript:;\"><i class=\"fa fa-list\"></i>  <span>Giáo viên & phụ huynh</span> <span class=\"pull-right-container\"><i class=\"fa fa-angle-right pull-right\"></i></span></a>\n');
document.write('                        <ul class=\"treeview-menu\">\n');
document.write('                            <li><a href=\"javascript:;\"><i class=\"fa fa-check\"></i>  <span>Điểm danh</span></a></li>\n');
document.write('                            <li class=\"active\"><a href=\"javascript:;\"><i class=\"fa fa-plus-square-o\"></i>  <span>Hoạt động lớp học</span></a></li>\n');
document.write('                            <li><a href=\"javascript:;\"><i class=\"fa fa-envelope\"></i>  <span>Lời nhắn</span></a></li>\n');
document.write('                            <li><a href=\"javascript:;\"><i class=\"fa fa-send\"></i>  <span>Xin nghỉ</span></a></li>\n');
document.write('                            <li><a href=\"javascript:;\"><i class=\"fa fa-medkit\"></i>  <span>Dặn thuốc</span></a></li>\n');
document.write('                            <li><a href=\"javascript:;\"><i class=\"fa fa-bus\"></i>  <span>Đơn đón về</span></a></li>\n');
document.write('                            <li><a href=\"javascript:;\"><i class=\"fa fa-heartbeat\"></i>  <span>Sức khoẻ</span></a></li>\n');
document.write('                            <li><a href=\"javascript:;\"><i class=\"fa fa-newspaper-o\"></i>  <span>Bài viết</span></a></li>\n');
document.write('                            <li><a href=\"javascript:;\"><i class=\"fa fa-plus\"></i>  <span>Thêm học sinh</span></a></li>\n');
document.write('                        </ul>\n');
document.write('                    </li>\n');
document.write('                    <li class=\"treeview\"><a href=\"javascript:;\"><i class=\"fa fa-cart-plus\"></i>  <span>Bán hàng</span> <span class=\"pull-right-container\"><i class=\"fa fa-angle-right pull-right\"></i></span></a>\n');
document.write('                        <ul class=\"treeview-menu\">\n');
document.write('                            <li><a href=\"javascript:;\"><i class=\"fa fa-circle-o\"></i>  <span>Quản lý đơn hàng</span></a></li>\n');
document.write('                            <li><a href=\"javascript:;\"><i class=\"fa fa-circle-o\"></i>  <span>Quản lý sản phẩm</span></a></li>\n');
document.write('                        </ul>\n');
document.write('                    </li>\n');
document.write('                    <li class=\"treeview\"><a href=\"javascript:;\"><i class=\"fa fa-gear\"></i>  <span>Hệ thống</span> <span class=\"pull-right-container\"><i class=\"fa fa-angle-right pull-right\"></i></span></a>\n');
document.write('                        <ul class=\"treeview-menu\">\n');
document.write('                            <li><a href=\"javascript:;\"><i class=\"fa fa-circle-o\"></i>  <span>Danh sách tài khoản</span></a></li>\n');
document.write('                            <li><a href=\"javascript:;\"><i class=\"fa fa-circle-o\"></i>  <span>Quản lý Phân quyền</span></a></li>\n');
document.write('                            <li><a href=\"javascript:;\"><i class=\"fa fa-circle-o\"></i>  <span>Quản lý lớp</span></a></li>\n');
document.write('                            <li><a href=\"javascript:;\"><i class=\"fa fa-circle-o\"></i>  <span>Loại hoạt động</span></a></li>\n');
document.write('                            <li><a href=\"javascript:;\"><i class=\"fa fa-circle-o\"></i>  <span>Log request</span></a></li>\n');
document.write('                            <li><a href=\"javascript:;\"><i class=\"fa fa-circle-o\"></i>  <span>Quản lý trường</span></a></li>\n');
document.write('                        </ul>\n');
document.write('                    </li>\n');
document.write('                </ul>\n');
document.write('                <!-- END Sidebar Menu Tree -->\n');
document.write('            </div>\n');
document.write('            <!-- END Sidebar Content -->\n');
document.write('            <!-- BEGIN Sidebar Footer -->\n');
document.write('            <div class=\"sidebar-footer p-2\">\n');
document.write('                <div class=\"small opacity-50\">© Copyright 2022 by SS CMS</div>\n');
document.write('            </div>\n');
document.write('            <!-- END Sidebar Footer -->\n');
document.write('        </div>\n');
document.write('        <!-- END Site Sidebar -->');